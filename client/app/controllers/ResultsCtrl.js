angular.module('inspector.results', [])

.controller('ResultsDisplayController', function($scope, $routeParams, $location, ResultService, Search) {
  var controller = this;
  this.results = ResultService.value;

  console.log('this.results : ', typeof this.results, this.results);
  
  this.findByLocationId = function(id){
    console.log('ResultsCtrl in findByLocationId: ', id)
    $routeParams.id = id;
    Search.getLocationResults(id)
    .then(function(inspections){
      ResultService.inspections = inspections;
      $location.path('/location')
    })
  }

});