angular.module('inspector.location', [])
.controller('LocationDisplayController', ['ResultService', function(ResultService) {
  var controller = this;
  this.inspections = ResultService.inspections;
}]);

// LocationDisplayController.$inject = ['ResultService']