#!/bin/bash
set -e

# Start Ollama in the background
/bin/ollama serve &
OLLAMA_PID=$!

# Wait for Ollama to start
echo "Waiting for Ollama to start..."
for i in $(seq 1 30); do
    if curl -s http://localhost:11434/api/tags >/dev/null; then
        break
    fi
sleep 1
done

# Check if the model exists; pull it only if it doesn't
if ! curl -s http://localhost:11434/api/tags | jq -e ".models[] | select(.name == \"${MODEL}\")" > /dev/null; then
    echo "${MODEL} model not found. Pulling..."
    /bin/ollama pull ${MODEL}
else
    echo "${MODEL} model already exists"
fi
# Wait for the Ollama process
wait $OLLAMA_PID
