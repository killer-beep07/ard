// import { createContext } from "react";
// import socketio from "socket.io-client";
import { Server } from "socket.io";
import WebSocket from "ws";
// import eiows from "eiows";
// const { App } = require("uWebSockets.js");

// import { WebSocketServer } from "ws";
import { createServer } from "http";
import express from "express";

// import { io } from "socket.io-client";
// const socket = io("http://localhost:2000");

// export const socket = socketio.connect("http://localhost:3000", {
//   transport: ["websocket"],
// });
// export const SocketContext = createContext();

// Regular Websockets Server
// const server = new WebSocketServer({ port: "8080" });
const PORT = 3000;

const app = express();
const httpServer = createServer(app);
const server = new Server(httpServer, {
  // Socket.IO options
  cors: { origin: "*" }
});
// const server = new WebSocket.Server({ port: "8080" });
server.on("connection", (socket) => {
  // console.log(socket.connected); // true
  console.log("Client connected");

  socket.send("Hello World")

  // socket.on('message', message => {
  //   socket.send(`Heart Rate:  + ${message}}`)
  // })

  // socket.on('close', () => {
  //   console.log('Client disconnected');
  // });

  // socket.on('error', (err) => { console.error(err); });
});

httpServer.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}.`)
);

app.get('/', async(req, res) => {
  res.status(200).send({
    message: "Hello World!",
  })
})
// // // socket.on("connect", () => {
// // //   console.log(socket.disconnected); // false
// // // });

// const http = createServer();
// const httpServer = new Server((req, res) => {
//   if (req.url !== "/") {
//     res.writeHead(404);
//     res.end("Not found");
//     return;
//   }
//   // reload the file every time
//   const content = readFileSync("index.html");
//   const length = Buffer.byteLength(content);

//   res.writeHead(200, {
//     "Content-Type": "text/html",
//     "Content-Length": length,
//   });
//   res.end(content);
// });

// const io = new Server(httpServer, {
//   // Socket.IO options
//   cors: { origin: "*" }
// });

// io.on('connection', (socket) => {
//   console.log(`connect ${socket.id} user`);
//   //send Msg to client
//   socket.emit('Hello World!');

//   socket.on("disconnect", (reason) => {
//     console.log(`disconnect ${socket.id} due to ${reason}`);
//   });

//   // receive Msg from client
//   socket.on('message', (message) => {
//     console.log(message);
//     socket.emit('message', `${socket.id.substring(0, 2)} said ${message}`);
//   });
// });

// server.listen(3000, () => console.log('listening on http://localhost:3000'));

// httpServer.listen(3000, () => console.log('listening on http://localhost:3000'));
