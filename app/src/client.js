//create a websocket client
const socket = io("http://localhost:2000");

// handling the event when the connection to server is successful
socket.on("open", () => {
    console.log("connected");

    // receive Msg from server
    socket.on('message', (data) => {
        console.log(`Message from server: ${data}`);
    });

    //sending a mesage to the server in 5 seconds
    setTimeout(() => {
        // send Msg to server
        socket.emit('message', 'Hello, server!');
        socket.send("hi");

        const text = document.querySelector('input').value;
        const button = document.querySelector("button");

        if (button) {
            button.onclick = () => {
                socket.emit('message', text)
                const el = document.createElement('li');
                el.innerHTML = text;
                document.querySelector('ul').appendChild(el)
                socket.send(text);
            }
        } else {
            console.error("Button not found!");
        }
    }, 5000);

    //handling the event when the websocket connection is closed
    socket.on("close", (code) => {
        console.log(`Connection closed with code: ${code}`);
    });

    //disconnecting the websocket connection in 10 seconds
    setTimeout(() => {
        socket.close();
    }, 10000);


})
