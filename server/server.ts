import express, { Express, Request, Response } from "express";
import http from "http";

const app: Express = express();
const server = http.createServer(app);
const port = 5000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
