//server for running app on local machine -node server.js
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 6969;
const cors = require("cors");
const path = require("path");
const io = require("socket.io")(server);
app.use(cors());

let users = [];

app.use(express.static("public"));

io.on("connection", function (socket) {
    console.log("connection");
    let addedUser = false;
    socket.on("add user", function(username, color) {
        socket.username = username;
        socket.color = color;
        addedUser = true;
        users.push(socket.username);
        socket.emit("login");
        socket.broadcast.emit("user joined", socket.username);
    });
    socket.on("message", function (data) {
        console.log(data);
        socket.broadcast.emit("message", {
            username: data.username,
            color: data.color,
            message: data.message
        });
    });
    socket.on("disconnect", function () {
        if (addedUser) {
            socket.broadcast.emit("user left", socket.username);
        }
    });
});

server.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});