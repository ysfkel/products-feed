module.exports=function(app){
   require('./products.controller')(app);
  require('./product-details.controller')(app);
}