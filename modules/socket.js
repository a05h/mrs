module.exports = (app, server) => {
  
  var io = require('socket.io')(server);
  
  io.on('connection', (socket) => {
    socket.on('message', (msg) => {
      io.emit('message', msg);
      //console.log('chat > ' + msg);
    });
  });
  
};