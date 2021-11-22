//server file for running webserver with "node server.js"  192.168.136.228

import WebSocket, {WebSocketServer} from 'ws';

let port = 9999;

const wss = new WebSocketServer({
    port: 9999,
    origin
});

console.log("server is listening on port %d", port);

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});