from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.generation import router as generation_router

app = FastAPI(title="Text Generation API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generation_router, prefix="/api/v1")


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
