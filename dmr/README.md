# README

Three-tier AI chatbot app.

- **frontend**: Pre-built Remix app on port `3000` that talks to the backend on `8000` at `{MODEL_HOST}` and passes the backend the model via `{LLM_MODEL_NAME}` -- both from the local `.env` file
- **backend**: FastAPI backend that talks to DMR via the same two env vars in the local `.env` file
- **dmr**: Docker Model Runner backend with OpenAI endpoints. DMR address in `{MODEL_HOST}` in `.env`

Start with `docker compose up --build`.

Stop with `docker compose down --rmi all --volumes`