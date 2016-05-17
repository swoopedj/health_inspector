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
      controller: 'ResultsDisplayController',
      controllerAs: 'ResultsCtrl'
    })
    .when('/location', {
      templateUrl: '../views/restaurant.html',
      controller: 'LocationDisplayController',
      controllerAs: 'LocationCtrl'
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
