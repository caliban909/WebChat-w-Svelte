//server file for running webserver with "node server.js"  192.168.136.228

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const WebSocketServer = require("ws/lib/websocket-server");

const port = 6969;
const server = http.createServer(express);
const wss = new WebSocketServer({server});

wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
}) 

server.listen(port, function() {
    console.log("Server is listening on ${port}!")
})