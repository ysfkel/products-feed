/**
 * @ngdoc
 * @name LocalStore
 * @description provides an api for storing and retriving items in the Localstorage
 */
module.exports = function (app) {
    app.service('LocalStore',LocalStore);
    //injects dependencies
    LocalStore.$inject=['$rootScope']
    //constructor function for localstorage
    function LocalStore($rootScope) {
        //local storage name
        var STORENAME = 'PRODUCTS';

        /**
         * @name getStore
         * @description retrieves items from the local store
         */
        var getStore = function () {
            var store = localStorage.getItem(STORENAME);
            //if cart exists return cart else return empty array
            return (!!store) ? JSON.parse(store) : [];

        };

        /**
         * @name clear
         * @descripton clears items from the localstore
         * 
         */
        var clear = function () {
            //clears local storage
            localStorage.clear();
        };

        /**
         * @name save
         * @description saves items in localstorage
         */
        var save = function (items) {
            try {
                //converts the cart to a string
                var items_string = JSON.stringify(items);
                //persists the stringified cart in local storage
                localStorage.setItem(STORENAME, items_string);
                //notifies listeners of the updated cart
         
            }
            catch (e) {
                  throw e
            }
        };





        this.save = save;
        this.getStore = getStore;
        this.clear = clear;
    }
}
