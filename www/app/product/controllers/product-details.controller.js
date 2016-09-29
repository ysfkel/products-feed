

/**
 * @ngdoc
 * @name app
 * @description Creates angularjs module
 */

module.exports = function (app) {
    //declares angular controller
    app.controller('productDetailsController', productDetailsController)
    //Injects dependencies
    productDetailsController.$inject = ['$scope', 'product'];
    function productDetailsController($scope, product) {

        //binds selected product to the scopr
        $scope.product = product;
        //sets initial product description text length
        $scope.initialTextLength = 200;
        $scope.textLimit = $scope.initialTextLength
        //changes the length of product description text to show
        $scope.showmore = function (length) {
            $scope.textLimit = length;
        }

    }
}