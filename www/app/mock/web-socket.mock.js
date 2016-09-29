/**
 * @ngdoc
 * @name WebSocket
 * @description a wrapper service for socket.io client library
 */
module.exports = function (app) {
    'use strict';
    app.service('WebSocketMock', WebSocket)

    WebSocket.$inject=[];
    //defines service constructor function
    function WebSocket() {
        var socket = {};
        this.events={};
         // Receive Events
        this.on = function(eventName, callback){
            if(!this.events[eventName]) 
            this.events[eventName] = [];
            this.events[eventName].push(callback);
        }

        // Send Events
        this.emit = function(eventName, data, emitCallback){
            if(this.events[eventName]){
            angular.forEach(this.events[eventName], function(callback){
                $rootScope.$apply(function() {
                callback(data);
                });
            });
            };
            if(emitCallback) emitCallback();
        }

      // return socket;
    }



       
}


