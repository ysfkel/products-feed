
var express = require('express');
var app = express();
require('./app.settings')(app);
require('./app.middleware')(app, express);

app.get('/', function (req, res) {
    res.render('index');
})

module.exports=app;





