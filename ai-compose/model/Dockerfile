FROM ollama/ollama:0.5.2

RUN apt-get update && apt-get install -y ca-certificates && apt-get install -y curl && apt-get install -y jq && rm -rf /var/lib/apt/lists/*

ENV OLLAMA_HOST=0.0.0.0
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

COPY start.sh /usr/local/bin/start.sh

RUN chmod +x /usr/local/bin/start.sh

ENV LD_LIBRARY_PATH=/usr/local/nvidia/lib:/usr/local/nvidia/lib64
ENV NVIDIA_DRIVER_CAPABILITIES=compute,utility
ENV NVIDIA_VISIBLE_DEVICES=all

EXPOSE 11434

ENTRYPOINT ["/bin/bash", "-c", "/usr/local/bin/start.sh"]

