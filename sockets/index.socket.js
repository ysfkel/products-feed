module.exports=function(io){
    require('./product.socket')(io);
    require('./product.broadcast')(io);
}