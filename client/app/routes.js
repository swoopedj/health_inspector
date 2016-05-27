angular.module('inspector')
  .config(function($routeProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: '../views/search.html',
      controller: 'SearchFormController',
      controllerAs: 'SearchCtrl',
      reloadOnSearch: false
    })
    .when('/results', {
      templateUrl: '../views/results.html',
      controller: 'ResultsDisplayController',
      controllerAs: 'ResultsCtrl',
      reloadOnSearch: false
    })
    .when('/location', {
      templateUrl: '../views/restaurant.html',
      controller: 'LocationDisplayController',
      controllerAs: 'LocationCtrl',
      reloadOnSearch: false
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
