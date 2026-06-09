# docker-express-api

A production-grade Node.js 22 + Express 5 REST API starter image.

## Pull

```bash
docker pull minhle202/express-api
```

## Run

```bash
docker run --rm -p 3000:3000 minhle202/express-api
```

The server listens on port `3000` (override with the `PORT` env var).

## Try it

```bash
curl http://localhost:3000/
curl http://localhost:3000/health
curl "http://localhost:3000/api/hello?name=Minh"
```

## Endpoints

| Method | Path              | Description                                      |
| ------ | ----------------- | ------------------------------------------------ |
| GET    | `/`               | Service info: name, version, list of endpoints.  |
| GET    | `/health`         | Health check: `{ "status": "ok", "uptime": n }`. |
| GET    | `/api/hello?name=` | Greeting; `name` defaults to `world`.            |

## What's inside

- Node 22 on Alpine — small, current LTS-line runtime.
- Express 5 — modern routing and middleware.
- Multi-stage build — dependencies installed separately for a lean final image.
- Runs as the non-root `node` user.
- `HEALTHCHECK` wired to `/health`.
- Graceful shutdown on `SIGTERM` / `SIGINT`.

## Tags

- `latest` — multi-arch image for `linux/amd64` and `linux/arm64`.

## License

MIT © Lê Đức Minh
