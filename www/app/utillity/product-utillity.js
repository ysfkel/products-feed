
/**
 * @ngdoc
 * @name product-utillity
 * @description utillity functions for processing product
 */

/**
 * @name buildNavigation
 * @param {array} products array of products 
 * @returns {array} string array  of product categories
 * @description  creates a string array of product categories by collecting unique 
 *               category names from products 
 */
var buildNavigation = function (products) {
    var list = [];
    products.forEach(function (product) {
       
        try {
            //get product category
            var category = product.categories.category.$t;
            //adds the cateory to the list if it does not exist in the list
            list = addItemToList(category, list)
        }
        catch (e) {
            throw e
        }
    }) 

    return list;
}

/**
 * @name getProductByCategory
 * @param {array} products array of products 
 * @param {string} category product category
 * @returns {array} products product list
 * @description filters the products by the input category parameter
 *               
 */
function getProductByCategory(products,category){
   if(!!products){
      return products.filter(function(product){
        //returns product if product category equals selected category returns
        return (!!product.categories && !!product.categories.category)?product.categories.category.$t===category:false;
     })
   }
    
}

/**
 * @name getProductById
 * @param {array} products array of products 
 * @param {string} id product id
 * @returns {object} product selected product
 * @description filters the products by the input id parameter
 *               
 */
function getProductById(products,id){
    if(!!products){
      var product= products.filter(function(product){
        return product._id===id;
     })
     //if array is not empty, return the first item
     return (!!product.length && product.length>0)?product[0]:null;
    }

}

/**
 * @name addItemToList
 * @param {object} item product
 * @param {array} list product array
 * @returns {object} product selected product
 * @description filters the products by the input id parameter
 *               
 */
function addItemToList(item, list) {
     //if list does not contain item, add item to list
    if (!exists(item, list)) {
        list.push(item);
    }
    return list;
}


/**
 * @name exists
 * @param {object} item product
 * @param {array} list product array
 * @returns {boolean}  
 * @description returns true if item is in array
 *               
 */
function exists(item, list) {
    return list.indexOf(item) !== -1;
}

module.exports={
    buildNavigation:buildNavigation,
    getProductByCategory:getProductByCategory,
    getProductById:getProductById,
    addItemToList:addItemToList,
    exists:exists
};