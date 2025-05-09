import logging
from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
import httpx
import os
import json
from typing import List, Dict, Optional, Any
from datetime import datetime
from fastapi.responses import StreamingResponse
import asyncio
from openai import AsyncOpenAI
from openai.types.chat import ChatCompletionMessageParam

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

# Get the model host from environment variable or use default
MODEL_HOST = os.getenv("MODEL_HOST", "http://model-runner.docker.internal/engines/v1")
# Get the model name from environment variable or use default
LLM_MODEL_NAME = os.getenv("LLM_MODEL_NAME", "ai/mistral:7B-Q4_K_M")

logger.info(f"Using model host: {MODEL_HOST}")
logger.info(f"Using model: {LLM_MODEL_NAME}")

# Message classes
class Message(BaseModel):
    role: str
    content: str


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    model: str = LLM_MODEL_NAME
    temperature: float = 0.7
    stream: bool = True


class ChatResponse(BaseModel):
    message: ChatMessage
    model: str
    created_at: str
    done: bool = True


@router.post("/chat/stream")
async def chat_stream(request: Request):
    """
    Streaming chat endpoint. Uses the OpenAI client with streaming enabled.
    """
    try:
        # Parse the request body
        data = await request.json()
        messages = data.get("messages", [])
        temperature = data.get("temperature", 0.7)
        model = data.get("model", LLM_MODEL_NAME)
        
        logger.info(f"Streaming chat with model: {model}")
        # Log what model is coming from different sources
        logger.info(f"ChatRequest model field: {model}")
        logger.info(f"LLM_MODEL_NAME from os.environ: {LLM_MODEL_NAME}")
        
        async def generate():
            try:
                # Initialize the OpenAI client with the base URL
                client = AsyncOpenAI(base_url=MODEL_HOST, api_key="not-needed")
                
                # Convert message format for OpenAI API
                openai_messages = []
                
                # Add system message if not present
                has_system = any(msg.get("role") == "system" for msg in messages)
                if not has_system:
                    openai_messages.append({
                        "role": "system",
                        "content": "You are a helpful assistant. Keep your responses simple. Limit responses to no a maximum of two sentences."
                    })
                
                # Add the rest of the messages
                for msg in messages:
                    openai_messages.append({
                        "role": msg.get("role"),
                        "content": msg.get("content")
                    })
                
                # Ensure conversation always alternates between user and assistant
                valid_messages = validate_message_history(openai_messages)
                
                # Call the OpenAI API with streaming enabled
                stream = await client.chat.completions.create(
                    model=model,
                    messages=valid_messages,
                    temperature=temperature,
                    stream=True
                )
                
                # Stream the response back
                async for chunk in stream:
                    if chunk.choices and chunk.choices[0].delta.content:
                        content = chunk.choices[0].delta.content
                        response_data = {
                            "message": {
                                "role": "assistant",
                                "content": content
                            },
                            "model": model,
                            "created_at": datetime.utcnow().isoformat()
                        }
                        yield f"data: {json.dumps(response_data)}\n\n"
                
                # Signal the end of the stream
                yield "data: [DONE]\n\n"
                
            except Exception as e:
                logger.error(f"Streaming chat error: {str(e)}")
                error_response = json.dumps({"error": str(e)})
                yield f"data: {error_response}\n\n"
        
        return StreamingResponse(generate(), media_type="text/event-stream")
        
    except Exception as e:
        logger.error(f"Error setting up streaming chat: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


def validate_message_history(messages):
    """
    Ensures messages alternate properly between user and assistant.
    This is required for some models like Mistral.
    """
    # Make a copy to avoid modifying the input
    result = messages.copy()
    
    # Start checking from index 0 or 1 depending on if there's a system message
    start_idx = 0
    if result and result[0]["role"] == "system":
        start_idx = 1
    
    # Check for proper alternating pattern
    i = start_idx
    while i < len(result):
        expected_role = "user" if (i - start_idx) % 2 == 0 else "assistant"
        
        if result[i]["role"] != expected_role:
            # Fix the pattern by inserting a placeholder if needed
            if expected_role == "assistant":
                # Insert empty assistant message before this user message
                result.insert(i, {"role": "assistant", "content": ""})
            elif expected_role == "user":
                # Insert empty user message before this assistant message
                result.insert(i, {"role": "user", "content": "[No user message]"})
            # Don't increment i here as we need to check the next message after insertion
        else:
            # Move to the next message
            i += 1
    
    return result