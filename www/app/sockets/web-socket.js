/**
 * @ngdoc
 * @name WebSocket
 * @description a wrapper service for socket.io client library
 */
module.exports = function (app) {
    'use strict';
    app.factory('WebSocket', WebSocket)

    WebSocket.$inject=[];
    //defines service constructor function
    function WebSocket() {
        var socket = io();
        socket.on('connect', function () {
            console.log('socket connected to server..')
        });

        

        return socket;

    }
}

