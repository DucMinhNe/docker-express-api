// docker-express-api — minimal production-grade Express 5 REST API starter.
// Part of the minhle202 Docker Hub starter family.
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

// Trust proxy headers when running behind a load balancer / reverse proxy.
app.set("trust proxy", true);
app.disable("x-powered-by");

// GET / — service info.
app.get("/", (_req, res) => {
  res.json({
    name: "docker-express-api",
    version: "1.0.0",
    endpoints: ["/", "/health", "/api/hello"],
  });
});

// GET /health — liveness probe.
app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// GET /api/hello?name= — greeting; name defaults to "world".
app.get("/api/hello", (req, res) => {
  const name = req.query.name || "world";
  res.json({ message: `Hello, ${name}!` });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`docker-express-api listening on http://${HOST}:${PORT}`);
});

// Graceful shutdown: stop accepting connections, then exit.
function shutdown(signal) {
  console.log(`${signal} received, shutting down gracefully...`);
  server.close((err) => {
    if (err) {
      console.error("Error during shutdown:", err);
      process.exit(1);
    }
    console.log("Closed all connections. Bye.");
    process.exit(0);
  });
  // Force exit if connections do not drain in time.
  setTimeout(() => {
    console.error("Forced shutdown after timeout.");
    process.exit(1);
  }, 10_000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
