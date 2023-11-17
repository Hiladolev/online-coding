import express from "express";
import * as http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("code change", (data) => {
    socket.broadcast.emit("received code change", data);
  });
});

server.listen(3001, () => {
  console.log("server is running");
});
