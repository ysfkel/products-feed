
/**
 * @name Product model
 * @description Model for products
 */
  function Product(){
    this.productID,
    this.name;
    this.description;
    this.price;
    this.productURL;
    this.imageURL
    this.categories={
        category:{
            path:String,
            $t:String
        }
    }
}



module.exports=ProductSchema;
