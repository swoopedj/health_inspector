angular.module('inspector.location', [])
.controller('LocationDisplayController', function($scope, ResultService) {
  var controller = this;
  this.inspections = ResultService.inspections;
  $scope.goBack = function(){
    window.history.go(-2);

  }
})
.$inject = ['$scope', 'ResultService']

