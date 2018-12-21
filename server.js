const http = require('http');
const app = require('./app');
const port = 3020;
const Server = http.createServer(app);
Server.listen(port);