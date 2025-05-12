# Docker Deep Dive

This repos contains the apps and config files for my [Docker Deep Dive](https://www.amazon.com/dp/1916585256) book.

## Folders and container images

- **ai-compose:** App files and Dockerfiles for Ollama-based Compose app. DEPRECATED in **May 2025** edition in favour of Docker Model Runner
- **multi-container:** Compose app and app code for chapter 9
- **multi-stage:** Very simple Go client-server app to demonstrate multi-stage builds
- **node-app:** Node.js web server. Used for `docker init` example
- **swarm-app:** Flask app with two versions to demo declarative updates. DEPRECATED in May 2025 edition in favor of **swarm-new**
- **swarm-new:** Compose file for same Swarm Flask app but with the volume mapped to the correct redis service
- **swarm-chapters:** PDF of the original Swarm chapters
- **web-app-0.2:** Unsure, need to check, might deprecate
- **web-app-slim:** Unsure, need to check, Might deprecate
- **web-app:** Unsure, need to check 
- **dmr:** Three-tier AI chatbot app that integrated with DMR (May 2025 edition)
- **openwebui:** Off-the-shelf app integration with DMR (May 2025 edition)

## Unscheduled May 2025 edition

Docker, Inc. relesed a brand new technology in April 2025 called Docker Model Runner (DMR) that changes everything about how we run local LLMs with Docker. As a result, I busted a gut to write an amazing new chapter covering DMR.

## Swarm chapter(s)

In the May 2025 edition I consolidated the two original Swarm chapters into a new shorter Swarm chapter (Ch 12). This was to make space for the more strategic and more important Docker Model Runner chapter. If I'd kept the original Swarm chapters the increased printing costs would've resulting in a price increase for the book which I wanted to avoid. The new Swarm chapter is still excellent, but the topic takes up less space now that it isn't a part of modern Docker workflows. The original Swarm chapters are included as a PDF in the **swarm-chapters** folder.