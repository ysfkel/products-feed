
/**
 * @ngdoc
 * @name productListController
 * @description defines controller for managing product lists
 * @requires $scope','$rootScope','ngDialog','DialogService','$http','Utillity','WebSocket','LocalStore
 */

//imports productCollection model 
var ProductCollection = require('../../models/productCollection');

module.exports = function (app) {

    app.controller('productListController', productListController)
    //injects dependencies
    productListController.$inject = ['$scope', '$rootScope', 'ngDialog', 'DialogService', '$http', 'Utillity', 'WebSocket', 'LocalStore'];
    //defines controller constructor function
    function productListController($scope, $rootScope, ngDialog, DialogService, $http,
        Utillity, WebSocket, LocalStore) {
        var vm = this;
        vm.category = "All categories"
        vm.collection = new ProductCollection($http);
        /***
         * listens for products event fired by socket on the server
         * recieves the data and updates client side products collection
         * saves data in localStorage 
         * */
        WebSocket.on('products', function (data) {
            $scope.$apply(function () {
                //store data
                vm.collection.data = data;
                //save to localstorage
                LocalStore.save(data);
                clearMessage();
            })
        });
        /***
        * listens for error:product event fired by socket on the server if an error occurs when while fetching feed,
        * updates message property
        * */

        WebSocket.on('error:product', function () {
            $scope.$apply(function () {
                vm.message = "Your search returned no result, please review your url";
                vm.category = null;
            });
        });
       /***
        * listens for client:socket:id event fired by socket on the server recieves client id and stores it in the collection model,
        * 
        * */
        WebSocket.on('client:socket:id', function (id) {
            $rootScope.socketid = id;
            vm.collection.socketid = id;
            vm.fetchProducts();
        })
        /**
        * @name getProductById
        * @param {string} id product id
        * @takes selected productId and uses the id to fetch selected product
        *     opens modal popup to display selected product          
        */
        vm.getProductById = function (id) {
            //retrieves products from localstorage
            var products = LocalStore.getStore();

            //gets selected product by id from the retieved products
            var selectedProduct = Utillity.getProductById(products, id);
            //opens modal popup and displays selected product
            DialogService.open(require("../templates/item.html"), 'productDetailsController', selectedProduct, true);
            clearMessage();
        }
        /**
         * This event listens for the selectedCategoryItems event
         * which is triggered and handled by selecting a product category from the menu on the layout template and layoutController 
         * the selected category products collection is receieved by the selectedCategoryItems event
         * 
         *  */
        $rootScope.$on('selectedCategoryItems', function (e, data) {
            vm.collection.data = data.selectedCategoryItems;
            vm.category = data.category
            clearMessage();
        });
        /**
         * @name fetchProducts
         * @description fetches product collection from the server
         */
        vm.fetchProducts = function () {
            vm.collection.fetch()
            clearMessage();
        }

        function clearMessage() {
            vm.message = null;
        }




    }
}