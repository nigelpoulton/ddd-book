# Test web-app to use with Pluralsight courses and Docker Deep Dive book
FROM node:hydrogen-slim

LABEL maintainer="nigelpoulton@hotmail.com"

# Copy app to /src
COPY . /src

WORKDIR /src

# Install dependencies
RUN  npm install

EXPOSE 8080

ENTRYPOINT ["node", "./app.js"]
