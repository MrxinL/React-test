const path = require("path");
const httpProxy = require("http-proxy");
const compression = require("compression");
const express = require("express");
const { Routes } = require("./backend/api");

const proxy = httpProxy.createProxyServer({});

const isRunningLocally = process.env.NODE_ENV !== "production";
const app = express();

// compress all responses
app.use(compression());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// mount api v1 routes
app.use("/api/v1", Routes);

app.get("/*", async (req, res) => {
  if (isRunningLocally) {
    proxy.web(req, res, { target: "http://localhost:3001" });
  } else {
    res.set("Content-Type", "text/html");
    res.set("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.set("Expires", "-1");
    res.set("Pragma", "no-cache");
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  }
});

const server = app.listen(8080);
server.timeout = 1000 * 60 * 5; // 5 minutes
