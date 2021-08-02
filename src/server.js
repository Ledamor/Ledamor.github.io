const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('connection');
    ws.on('message', function incoming(message) {
        console.log('received', message);
        ws.send('gays say ' + message);
    });
});
