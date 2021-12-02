//server for running app on local machine -npx nodemon .\server.js
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 6969;
const cors = require("cors");
const path = require("path");
const io = require("socket.io")(server);
app.use(cors());

//initialising server side users array
let users = [];

app.use(express.static("public"));

io.on("connection", function (socket) {
    let addedUser = false;
    socket.on("add user", function(data) {
        addedUser = true;
        socket.username = data.username;
        socket.color = data.color;
        users.push({
            username: socket.username,
            color: socket.color,
        });
        socket.broadcast.emit("users", users);
        socket.emit("users", users);
        data.username = "system";
        data.color = "ghostwhite";
        socket.broadcast.emit("user joined", data);
        
    });
    socket.on("message", function (data) {
        socket.broadcast.emit("message", {
            username: data.username,
            color: data.color,
            message: data.message
        });
    });
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