angular.module('inspector')
  .config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: '../views/search.html',
      controller: 'SearchFormController',
      controllerAs: 'SearchCtrl'
    })
    .when('/results', {
      templateUrl: '../views/results.html',
      controller: 'ResultsCtrl'
    })
    .when('/results/:id', {
      templateUrl: '../views/restaurant.html',
      controller: 'RestaurantCtrl'
    })
    .when('/restaurant', {
      templateUrl: '../views/restaurant.html',
      controller: 'RestaurantCtrl'
    })
    .when('/', {
      templateUrl: '../views/search.html',
      controller: 'SearchFormController',
      controllerAs: 'SearchCtrl'
    })
    .otherwise({
      redirectTo: '/search'
    })
});
