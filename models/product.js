var ProductSchema=require('./productSchema');
var mongoose=require('mongoose');


module.exports=mongoose.model('Product',ProductSchema);