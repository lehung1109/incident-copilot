import "./instrumentation";
import http from "node:http";

console.log("OTEL_LOG_LEVEL", process.env.OTEL_LOG_LEVEL);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello from Node.js http module");
});

// register a path request
server.on("request", (req, res) => {
  console.log("Request received", req.url);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
