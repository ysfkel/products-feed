
/**
 * @ngdoc
 * @name Utillity
 * @description exposes the product-utillity api as angular service methods
 *               
 */
var productUtil=require('./product-utillity');
module.exports=function(app){

   app.service('Utillity',Utillity)

   Utillity.$inject=[];
   function Utillity(){

       this.buildNavigation=productUtil.buildNavigation;
       this.getProductByCategory=productUtil.getProductByCategory;
       this.getProductById=productUtil.getProductById;
       this.exists=productUtil.exists;
       this.addItemToList=productUtil.addItemToList
       
   }

}