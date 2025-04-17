FROM python:3.12-alpine@sha256:38e179a0f0436c97ecc76bcd378d7293ab3ee79e4b8c440fdc7113670cb6e204

# Update openssl
RUN apk add --no-cache \
 openssl=3.3.3-r0

# Create a non-root user and group
RUN addgroup -S appuser-group && adduser -D -H -G appuser-group appuser

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Use the non-root user
USER appuser

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
