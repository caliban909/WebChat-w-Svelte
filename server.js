//server for running app on local machine -npx nodemon .\server.js
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 6969;
const cors = require("cors");
const path = require("path");
const io = require("socket.io")(server);
app.use(cors());

//initialising server side array users
let users = [];

app.use(express.static("public"));

io.on("connect", function (socket) {
    let addedUser = false;
    //listening for "add user" event from socket
    socket.on("add user", function(data) {
        addedUser = true;
        //declaring user variables
        socket.username = data.username;
        socket.color = data.color;
        //adding user to users array
        users.push({
            username: socket.username,
            color: socket.color,
        });
        //sending new array to all users
        socket.broadcast.emit("users", users);
        socket.emit("users", users);
        //changing data values for system message
        data.username = "system";
        data.color = "ghostwhite";
        socket.broadcast.emit("user joined", data);
    });
    //listening for "message" event from socket
    socket.on("message", function (data) {
        //broadcasting the message to all other sockets
        socket.broadcast.emit("message", {
            username: data.username,
            color: data.color,
            message: data.message
        });
    });
    //automatic "disconnect" event when socket loses connection
    socket.on("disconnect", function () {
        if (addedUser) {
            socket.broadcast.emit("user left", socket.username);
            users = users.filter( x => x.username != socket.username);
            socket.broadcast.emit("users", users);
        }
    });
});

server.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});