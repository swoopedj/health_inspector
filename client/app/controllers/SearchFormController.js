angular.module('inspector.search', [])
.controller('SearchFormController', function($scope, $http, $routeParams, Search) {
  console.log('SearchCtrl active!')
  var controller = this;
 
  this.searchForInfo = function(info){
    console.log('search called on SearchCtrl! + info: ', info)

    //parse input here, if input is zip code

    $routeParams.zip = info;
    Search.getZipResults(info)
      .then(function(results){
        controller.results = results;
      })
  };
});