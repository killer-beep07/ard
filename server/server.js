import { Server } from "socket.io";
// import { instrument } from "@socket.io/admin-ui";

const PORT = 3000
//create a websocket server
const io = new Server(PORT, {
  // Socket.IO options
  cors: { origin: "*" }
  // cors: { origin: ["http://localhost:8080", "http://127.0.0.1:5500/", "https://admin.socket.io"] }
});

io.on("connection", (socket) => {
  console.log(`New client connected with: ${socket.id}`);

  //send welcome message
  // socket.send("Hello this is welcome message");

  // Send a message to the client's WebSocket
  socket.emit('message', 'Hello, client!');

  // Handle messages from the client's WebSocket
  socket.on('message', (data) => {
    console.log(`Message from client: ${data}`);
    // socket.send("hi")

    // socket.emit('message', `${data}`);
    // socket.broadcast.emit('message', `${data}`);

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

// instrument(io, { auth: false })




// io.listen(8080, () => {
// console.log(`listening on port: http://localhost:${PORT}`)
// })