module.exports = (app, server) => {
  
  var io = require('socket.io')(server);
  
  io.on('connection', (socket) => {
    console.log('Connecting successful');
    
//    socket.on('disconnect', () => {
//      console.log('Disconnected');
//    });
    
  });
  
};