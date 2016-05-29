angular.module('inspector.location', [])

.controller('LocationDisplayController', function($scope, $http, $routeParams, ResultService) {
  var controller = this;
  controller.inspections = ResultService.inspections;
});