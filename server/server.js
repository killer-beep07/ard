import { Server } from "socket.io";

const PORT = 3030
//create a websocket server
const io = new Server(PORT, {
  // Socket.IO options
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log('New client connected');

  //send welcome message
  // socket.send("Hello this is welcome message");

  // Send a message to the client's WebSocket
  socket.emit('message', 'Hello, client!');

  // Handle messages from the client's WebSocket
  socket.on('message', (data) => {
    console.log(`Message from client: ${data}`);
    // socket.send("hi")

    socket.emit('message', `${socket.id.substring(0,2)}`);

    //message handling
    // if (data == "hi") { 
    //   socket.send("hello");
    // } else if (data == "bye") {
    //   socket.send("goodbye");
    // } else {
    //   socket.send("other message");
    // }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});






// io.listen(8080, () => {
// console.log(`listening on port: http://localhost:${PORT}`)
// })