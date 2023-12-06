import express from "express";
import * as http from "http";
import { Server } from "socket.io";
import cors from "cors";
import config from "./utils/Config";
import bodyParser from "body-parser";
import router from "./routes/codeBlockRoute";
import logic from "./logic/codeBlockLogic";

const app = express();

app.use(cors());

//Server instance
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
//New connection - receiving event from the client-side
io.on("connection", (socket) => {
  socket.on("user_entrance", (id) => {
    const timestamp = new Date().toISOString();
    logic.addEntranceByCodeBlockId(id, timestamp);
    socket.emit("updated_entrance", id);
  });
  socket.on("code change", (data, id) => {
    socket.broadcast.emit("received code change", data, id);
    socket.emit("received code change", data, id);
  });
});

app.use(express.json());

app.use(bodyParser.json());

app.use("/api/v1/codeBlocks", router);

console.log("creating table if it doesn't exist");
logic.createCodeBlocksTable();

server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});
