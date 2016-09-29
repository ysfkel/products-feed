/**
 * Author: YUSUF KELO
 */
/**
 * @ngdoc
 * @name LayoutController
 * @description Layout page controller
 */
module.exports = function (app) {
      app.controller('LayoutController',LayoutController)
      //injects dependencies
      LayoutController.$inject=['$rootScope','WebSocket','LocalStore','Utillity'];
      //defines controller constructor function
      function LayoutController($rootScope, WebSocket, LocalStore, Utillity) {
            var vm = this;
            /**
             * listens for categoeries event from the server,
             * the server triggers this event , passing the list of 
             * categories to be rendered on the menu
             *  */
            WebSocket.on('categories', function (data) {
                  vm.menuItems = data.categories;
            });
           
           /**
             * @name filterProducts
             * @param {string} category product category
             * @returns {array} broadcasts the selected category items
             * @description filters the products by the input category parameter             
             */
            vm.filterProducts = function (category) {
                  var products = LocalStore.getStore();
                  var selectedCategoryItems = Utillity.getProductByCategory(products, category);
                  vm.refreshProductsList(selectedCategoryItems,category)
            }
           /**
             * @name showAllProducts
             * @param {string} category product category
             * @returns {array} broadcasts the selected category items
             * @description filters the products by the input category parameter
             *               
             */
            vm.showAllProducts = function () {
                  var category="All categories"
                  var products = LocalStore.getStore();
                   vm.refreshProductsList(products,category)
            }
             /**
             * @name refreshProductsList
             * @param {array} selectedCategoryItems product array
             * @param {string} category product category
             * @returns {array} broadcasts the selected category items
             * @description broadcasts an object containing products list and selected category
             *               
             */
            vm.refreshProductsList=function(selectedCategoryItems,category){
                     $rootScope.$broadcast('selectedCategoryItems',{
                     selectedCategoryItems:selectedCategoryItems,
                     category:category
                  })
            }

      }
}