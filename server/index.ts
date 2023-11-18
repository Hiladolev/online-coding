import express from "express";
import * as http from "http";
import { Server } from "socket.io";
import cors from "cors";
import config from "./utils/Config";
import bodyParser from "body-parser";
import router from "./routes/codeBlockRoute";

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

app.use(express.json());

app.use(bodyParser.json());

app.use("/api/v1/codeBlocks", router);

server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});
