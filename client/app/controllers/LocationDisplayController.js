angular.module('inspector.location', [])

.controller('LocationDisplayController', function($scope, $http, $routeParams, ResultService) {
  var controller = this;
  this.visits = ResultService.inspections;
  console.log('LocationController => this.loction: ', this.inspections);
});