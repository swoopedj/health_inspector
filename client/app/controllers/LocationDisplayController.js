angular.module('inspector.location', [])
.controller('LocationDisplayController', function(ResultService) {
  var controller = this;
  this.inspections = ResultService.inspections;
})
.$inject = ['ResultService']

