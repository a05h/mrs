var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    route = require('./modules/router'),
    socketStream = require('./modules/socket');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

var server = http.createServer(app);

route(app);
socketStream(app, server);

server.listen(3000, () => {
  console.log('Listening port: 3000');
});