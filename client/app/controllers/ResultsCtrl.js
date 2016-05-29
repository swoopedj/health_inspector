angular.module('inspector.results', [])

.controller('ResultsDisplayController', function($routeParams, $location, ResultService, Search) {
  var controller = this;
  this.results = ResultService.value;
  
  this.findByLocationId = function(id){
    $routeParams.id = id;
    Search.getLocationResults(id)
    .then(function(inspections){
      var sortedInspections = inspections.sort(function(a, b){
        if(a.inspection_date < b.inspection_date){
          return 1;
        }
        if(a.inspection_date > b.inspection_date){
          return -1;
        } else {return 0}
      });
      ResultService.inspections = sortedInspections;

    })
    .then(function(){
      $location.path('/location');
    })
  }

})
.$inject = ['$routeParams', '$location', 'ResultService', 'Search']