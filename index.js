const express = require('express');
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors({origin: "*"}))
const http = require('http');
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
    console.log("user connected");
    socket.on("newMessage", (msg)=> {
      io.emit("message", msg["message"])
    })
  });
  httpServer.listen(3000, () => {
  console.log('listening on *:3000');
});