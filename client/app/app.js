angular.module('inspector', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: '../views/search.html',
      controller: 'controllers/SearchCtrl.js'
    })
    .when('/result', {
      templateUrl: '../views/results.html',
      controller: 'controllers/ResultsCtrl.js'
    })
    .when('/restaurant', {
      templateUrl: '../views/restaurant.html',
      controller: 'controllers/RestaurantCtrl.js'
    })
    .otherwise({
      redirectTo: '/search'
    })
});