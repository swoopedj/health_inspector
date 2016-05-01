angular.module('inspector', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: '../views/search.html',
      controller: 'controllers/search_ctrl.js'
    })
    .when('/result', {
      templateUrl: '../views/results.html',
      controller: 'controllers/results_ctrl.js'
    })
    .when('/restaurant', {
      templateUrl: '../views/restaurant.html',
      controller: 'controllers/rest_ctrl.js'
    })
    .otherwise({
      redirectTo: '/search'
    })
});