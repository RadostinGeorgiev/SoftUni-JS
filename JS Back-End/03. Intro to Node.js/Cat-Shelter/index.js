const http = require('http');
const url = require('url');
const fs = require('fs');

const PORT = 3000;

const handlers = require('./handlers');

const server = http.createServer((req, res) => {
    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
});

server.listen(PORT, 'localhost', (err) => {
    console.log(err ? err : `Server listening port ${PORT}`);
});