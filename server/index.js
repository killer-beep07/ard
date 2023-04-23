import { createContext } from 'react';
import socketio from 'socket.io-client';
// import { WebSocket } from '';

// import { io } from "socket.io-client";
// const socket = io("http://localhost:2000");


export const socket = socketio.connect('http://localhost:5173', {
  transport: ['websocket'],
});
export const SocketContext = createContext();


// const server = new WebSocket.Server({ port: '5173' })
// server.on('connection', () => {
//   console.log(socket.connected); // true
// })


// // // socket.on("connect", () => {
// // //   console.log(socket.disconnected); // false
// // // });

