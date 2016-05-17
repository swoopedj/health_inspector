angular.module('inspector.search', [])
.controller('SearchFormController', function($location, $http, $routeParams, Search, ResultService) {
  console.log('SearchCtrl active!')
  var controller = this;
 
  this.searchForInfo = function(info){
    console.log('search called on SearchCtrl! + info: ', info)

    //parse input here

    //if input is zip code
    if(Number(info) !== NaN && info.length === 5){
      $routeParams.zip = info;
      Search.getZipResults(info)
        .then(function(results){
          ResultService.value = results.slice(0, 10);
          console.log('Made it back to searchForInfo! ResultService.value: ', ResultService.value)
          $location.path('/results')
      })
    }


  };
});