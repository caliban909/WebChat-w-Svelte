//server file for running webserver with command: "node server.js"  192.168.136.228

import { createServer } from 'https';
import { WebSocketServer } from 'ws';

const server = createServer({
  server: httpServer,
  path: app.path() + "/ws",
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  new DevToolsBackend().serve(socket);
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

server.listen(6969);
console.log("server is listening on port 6969");