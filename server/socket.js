import { Server } from "socket.io";

// const io = require('socket.io')(2000, {
  const io = new Server(2000, {
    // Socket.IO options
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('New client connected');

  // Send a message to the client's WebSocket
  socket.emit('message', 'Hello, client!');

  // Handle messages from the client's WebSocket
  socket.on('message', (data) => {
    console.log(`Received message from client: ${data}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
