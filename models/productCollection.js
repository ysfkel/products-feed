var ProductSchema=require('./productSchema');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductCollectionSchema=new Schema({
   product:[ProductSchema]
});

module.exports=mongoose.model('ProductCollection',ProductCollectionSchema);
  