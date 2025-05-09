# Docker Deep Dive

This repos contains the apps and config files for the 2025 edition of [Docker Deep Dive](https://www.amazon.com/dp/1916585256).

### Folders and container images

- **ai-compose:** DEPRECATED in **May 2025** edition in favour of Docker Model Runner. App files and Dockerfiles for Ollama-based Compose app
- **multi-container:** Compose app and app code for chapter 9
- **multi-stage:** Very simple Go client-server app to demonstrate multi-stage builds
- **node-app:** Node.js web server. Used for `docker init` example
- **swarm-app:** Flask app with two versions to demo declarative updates (DEPRECATED in May 2025 edition)
- **web-app-0.2:** Unsure, need to check, might deprecate
- **web-app-slim:** Unsure, need to check, Might deprecate
- **web-app:** Unsure, need to check 
- **dmr:** Three-tier AI chatbot app that integrated with DMR (May 2025 edition)
- **openwebui:** Off-the-shelf app integration with DMR (May 2025 edition)

### Unscheduled May 2025 edition

Docker, Inc. relesed a brand new technology in April 2025 called Docker Model Runner (DMR) that changes everything about how we run local LLMs with Docker. As a result, I busted a gut to write an amazing new chapter covering DMR.

