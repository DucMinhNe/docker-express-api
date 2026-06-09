# minhle202/express-api

A production-grade **Node.js 22 + Express 5** REST API starter image. Pull it, run it, and you have a clean, non-root, health-checked HTTP service ready to extend.

## Supported tags

- `latest` · `linux/amd64`, `linux/arm64`

## Quick start

```bash
docker pull minhle202/express-api
docker run --rm -p 3000:3000 minhle202/express-api
```

The server listens on port `3000`. Set `PORT` to change it:

```bash
docker run --rm -e PORT=8080 -p 8080:8080 minhle202/express-api
```

## Endpoints

| Method | Path                | Response                                          |
| ------ | ------------------- | ------------------------------------------------- |
| GET    | `/`                 | `{ name, version, endpoints }`                    |
| GET    | `/health`           | `{ "status": "ok", "uptime": <seconds> }`         |
| GET    | `/api/hello?name=`  | `{ "message": "Hello, <name>!" }` (default world) |

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl "http://localhost:3000/api/hello?name=Minh"
```

## Features

- Node 22 on Alpine for a small, current runtime.
- Express 5 with modern routing.
- Multi-stage build for a lean final image.
- Runs as the non-root `node` user.
- Built-in `HEALTHCHECK` against `/health`.
- Graceful shutdown on `SIGTERM` / `SIGINT`.

## Source

https://github.com/DucMinhNe/docker-express-api

MIT © Lê Đức Minh
