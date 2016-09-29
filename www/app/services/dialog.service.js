/**
 * @ngdoc 
 * @name DialogService
 * @description a wrapper service for ngdialog module
 */
module.exports = function (app) {
    'use strict';
    app.service('DialogService', DialogService);
    //injects dependencies
    DialogService.$inject = ['ngDialog'];
    //defines services constructor function
    function DialogService(ngDialog) {
        /**
            * @name refreshProductsList
            * @param {array} selectedCategoryItems product array
            * @param {string} template popup template
            * @param {string} controller popup controller
            * @param {object} data 
            * @description opens modal popoup            
            */
        this.open = function (template, controller, data, plain) {
            ngDialog.open({
                template: template,
                plain: plain,
                className: 'ngdialog-theme-default',
                controller: controller,
                resolve: {
                    product: function () {
                        return data;
                    }
                }
            });
        }
    }
};














