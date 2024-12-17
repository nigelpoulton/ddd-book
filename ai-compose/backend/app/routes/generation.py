import logging
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import httpx
import os
import json
from typing import List, Dict
from datetime import datetime
from fastapi.responses import StreamingResponse
import asyncio

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()

MODEL_HOST = os.getenv("MODEL_HOST", "http://ollama:11434")


class GenerationRequest(BaseModel):
    prompt: str
    max_tokens: int = 500
    temperature: float = 0.7


class GenerationResponse(BaseModel):
    text: str


class Message(BaseModel):
    role: str
    content: str


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    model: str = "mistral"
    temperature: float = 0.7
    stream: bool = True


class ChatResponse(BaseModel):
    message: ChatMessage
    model: str
    created_at: str
    done: bool = True


class ModelDetails(BaseModel):
    parent_model: str = ""
    format: str
    family: str
    families: List[str]
    parameter_size: str
    quantization_level: str


class ModelInfo(BaseModel):
    name: str
    modified_at: str
    size: int
    digest: str
    details: ModelDetails


class ModelResponse(BaseModel):
    models: List[ModelInfo]


@router.post("/generate", response_model=GenerationResponse)
async def generate_text(request: GenerationRequest):
    model_host = os.getenv("MODEL_HOST", "http://ollama:11434")

    try:
        logger.info(f"Starting generation request with prompt: {request.prompt}")

        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{model_host}/api/generate",
                json={"model": "mistral", "prompt": request.prompt, "stream": True},
            )

            full_text = ""
            # Split the response text into lines and process each one
            for line in response.text.split("\n"):
                if not line.strip():
                    continue

                try:
                    data = json.loads(line)
                    if "response" in data:
                        full_text += data["response"]
                        logger.debug(f"Received chunk: {data['response']}")
                except json.JSONDecodeError as e:
                    logger.error(f"Failed to parse JSON: {e}")
                    continue

        logger.info(f"Generation complete. Response length: {len(full_text)}")
        return GenerationResponse(text=full_text)

    except httpx.HTTPError as e:
        logger.error(f"HTTP error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"HTTP error: {str(e)}")
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    model_host = os.getenv("MODEL_HOST", "http://ollama:11434")

    try:
        logger.info(f"Starting chat request with {len(request.messages)} messages")

        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{model_host}/api/chat",
                json={
                    "model": request.model,
                    "messages": [msg.dict() for msg in request.messages],
                    "stream": request.stream,
                    "temperature": request.temperature,
                },
            )

            full_content = ""
            created_at = None

            for line in response.text.split("\n"):
                if not line.strip():
                    continue

                try:
                    data = json.loads(line)
                    if not created_at:
                        created_at = data.get("created_at")
                    if "message" in data and "content" in data["message"]:
                        full_content += data["message"]["content"]
                        logger.debug(f"Received chunk: {data['message']['content']}")
                except json.JSONDecodeError as e:
                    logger.error(f"Failed to parse JSON: {e}")
                    continue

            return ChatResponse(
                message=ChatMessage(role="assistant", content=full_content),
                model=request.model,
                created_at=created_at or datetime.utcnow().isoformat(),
            )

    except Exception as e:
        logger.error(f"Error during chat: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/models", response_model=ModelResponse)
async def list_models():
    model_host = os.getenv("MODEL_HOST", "http://ollama:11434")

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{model_host}/api/tags")
            data = response.json()
            logger.debug(f"Received models data: {data}")
            return ModelResponse(**data)

    except Exception as e:
        logger.error(f"Error listing models: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/chat/stream")
async def chat_stream(request: ChatRequest):
    model_host = os.getenv("MODEL_HOST", "http://ollama:11434")
    logger.info(f"Starting streaming chat with request: {request}")

    async def generate():
        try:
            async with httpx.AsyncClient() as client:
                # Add system message to the messages list
                system_message = {
                    "role": "system",
                    "content": "You are a coding assistant. Keep your responses focused on programming, development, and technical topics. Be concise and provide practical code examples when relevant. Limit explanations to 2-3 sentences unless code examples are needed.",
                }

                messages = [system_message] + [msg.dict() for msg in request.messages]

                request_data = {
                    "model": request.model,
                    "messages": messages,
                    "stream": True,
                    "temperature": request.temperature,
                }
                logger.info(f"Sending request to Ollama: {request_data}")

                async with client.stream(
                    "POST", f"{model_host}/api/chat", json=request_data, timeout=60.0
                ) as response:
                    if not response.is_success:
                        error_msg = await response.text()
                        logger.error(f"Ollama error response: {error_msg}")
                        yield f'data: {{"error": "{error_msg}"}}\n\n'
                        return

                    async for line in response.aiter_lines():
                        if line.strip():
                            try:
                                data = json.loads(line)
                                logger.debug(f"Received data from Ollama: {data}")
                                if "message" in data and "content" in data["message"]:
                                    yield f"data: {json.dumps(data)}\n\n"
                            except json.JSONDecodeError as e:
                                logger.error(f"Failed to parse JSON: {e}, line: {line}")
                                continue

                    yield "data: [DONE]\n\n"

        except Exception as e:
            logger.error(f"Error during streaming chat: {str(e)}", exc_info=True)
            yield f'data: {{"error": "{str(e)}"}}\n\n'

    return StreamingResponse(generate(), media_type="text/event-stream")

