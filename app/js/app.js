'use strict';

// Declare app level module which depends on views, and components
angular.module('AuroraApp', [
  'AuroraApp.controllers',
  'AuroraApp.services',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
