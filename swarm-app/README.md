# Simple counter-app for demonstrating Docker Compose
Flask app that counts page refreshes in Redis backend and displays the name of the container that services each request.

**Used in:**
- Docker Deep Dive book 2023 edition

**Pre-built image:** [](https://hub.docker.com/repository/docker/nigelpoulton/ddd-book/) **tag:** `swarm-app`

### v2 app

The `swarm-appv2` tag was built by making two changes to the app.

Changing the image referenced in `index.html` from `image.png` to `wasm.ong` and changing the text.

Changing the CSS to:

```
header {
  background-color: #5a2d8c;
```

