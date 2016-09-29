
var io = require('socket.io')();

'use strict';

io.on('connection', function (socket) {
   //sends connection id to the connected client
   io.to(socket.id).emit('client:socket:id',socket.id);
 
})
module.exports = io;
