
var port=process.env.PORT || 3000;
var http = require("http");

module.exports=function(app){   

var server=http.Server(app);
var io = require('socket.io')(server);


    return {
      io:io,
      http:server
    }
}


