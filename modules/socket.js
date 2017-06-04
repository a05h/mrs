module.exports = (app) => {
  
  var io = require('socket.io');
  
  io.on('connection', (socket) => {
    console.log('Connecting successful');
  });
  
};