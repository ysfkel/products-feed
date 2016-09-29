var path = require('path');
var bodyParser = require('body-parser');
var app_secret = require('./config/app.infra.config').app_secret;
var xmlparser = require('express-xml-bodyparser');
var sio = require('./sockets/product.socket');
var product = require('./api/product.api');

module.exports = function (app, express) {


  app.use(express.static(path.join(__dirname, 'www')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(xmlparser());
  app.use(function (req, res, next) {
    req.socket = sio;
    next();
  });
  //plug apis
  app.use('/api', product);

}