
/**
 * @ngdoc
 * @name app
 * @description Creates angularjs module
 */

var angular=require('angular');
require('angular-ui-router');
require('ng-dialog')

var app=angular.module('ngApp',['ui.router','ngDialog']);
module.exports=app;
