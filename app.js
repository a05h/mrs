var http = require('http'),
    fs = require('fs'),
    route = require('./modules/router');

var server = http.createServer((req, res) => {
  
}).listen(3000, '127.0.0.1');

console.log('Listening port: 3000');