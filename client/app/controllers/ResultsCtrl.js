angular.module('inspector.results', [])

.controller('ResultsDisplayController', function($scope, ResultService) {
  var controller = this;
  this.results = ResultService.value;

  console.log('this.results : ', typeof this.results, this.results);
  
});