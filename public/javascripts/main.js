$(function () {
  var socket = io();
  $('form').submit(function() {
    socket.emit('message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
});

//;(function () {
//  
//  'use strict';
//  
//  let socket = io();
//  
//  document.getElementsByTagName('form').addEventListener('submit', () => {
//    let currentMessage = document.getElementById('m').value;
//    socket.emit('chat message', currentMessage);
//    document.getElementById('m').value = '';
//  }, false);
//
//})();