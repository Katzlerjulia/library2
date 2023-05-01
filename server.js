const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on("connection", (socket) => {
  socket.on("sendMessage", (message) => {
    socket.broadcast.emit("message", message);
  });
});


const PORT = process.env.PORT || 3800;

app.use(express.static(__dirname + "/public"));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
