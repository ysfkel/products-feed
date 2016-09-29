/**
 * @ngdoc
 * @name xmlparser
 * @description fetches xml feed and converts to json
 */
var http=require('http');
var parser = require('xml2json');

var xmlToJson=function(url, callback) {
  var req = http.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
        var json_string = parser.toJson(xml);
        var json=JSON.parse(json_string);
        callback(null, json);
    });
  });
}

module.exports=xmlToJson;