var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProductSchema=new Schema({
    productID:String,
    name:String,
    description:String,
    price:{currency:String,$t:String},
    productURL:String,
    imageURL:String,
    categories:{
        category:{
            path:String,
            $t:String
        }
    }
});

module.exports=ProductSchema;
