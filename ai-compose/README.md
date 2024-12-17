# README

Three-tier AI chatbot app based on the Docker sample app [here](https://hub.docker.com/r/ai/chat-demo).

Start the app via the `compose.yaml` or `gpu-compose.yaml` files depending on whether your Docker host has access to GPUs. The `compose.yaml` file runs the app on CPUs and will be slower, but should work if your Docker host and model server have at least 8GB RAM, 16GB recommended.

Folders:
- **backend:** Dockerfile and app code to build and start the backend server that passes prompts and responses to the model server
- **model:** Dockerfile and app to build and start an Ollama-based model server without preloaded model. The startup script pulls and loads the model specified in the Compose file
- **frontend:** Dockerfile and app code to build and start the chat front end

I've copied and modified the sample Docker app so that I have control over updates and ensure updates from Docker don't break examples in the book.

The example in the 2025 edition of the book builds the model server, but pulls the frontend and backend servers from Docker Hub. I created the Dockerfiles and app files for the frontend and backend services so I could build and push multi-arch images for both as the Docker repo only has Linux/AMD at the time of writing.

