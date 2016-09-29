
var io = require('./sockets/product.socket');
var app=require('./app')
var port = process.env.PORT || 3000;


  var server = startServer(app);
  io.attach(server);


function startServer(app) {
  return app.listen(port, function () {
    console.log('server started')
  })
}
