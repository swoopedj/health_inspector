angular.module('inspector.search', [])
.controller('SearchFormController', function($location, $http, $routeParams, Search, ResultService) {
  var controller = this;
 
  this.searchForInfo = function(info){

    //parse input here

    //if input is zip code
    if(Number(info) !== NaN && info.length === 5){
      $routeParams.zip = info;
      Search.getZipResults(info)
        .then(function(results){
          var restaurantNameMap = [];
          var uniqueResults = []
          results.forEach(function(item){
            if(restaurantNameMap.indexOf(item.restaurant_name) === -1){
              restaurantNameMap.push(item.restaurant_name);
              uniqueResults.push(item);
            }
          });
          var sortedResults = uniqueResults.sort(function(a, b){
            if(a.restaurant_name > b.restaurant_name){
              return 1
            }
            if(a.restaurant_name < b.restaurant_name){
              return -1
            } else {return 0}
          });
          ResultService.value = sortedResults;
          $location.path('/results')
      })
    }

    //if input is restaurant name
    else {
      $routeParams.name = info;
      Search.getNameResults(info)
        .then(function(results){
          var restaurantNameMap = [];
          var uniqueResults = []
          results.forEach(function(item){
            if(restaurantNameMap.indexOf(item.restaurant_name) === -1){
              restaurantNameMap.push(item.restaurant_name);
              uniqueResults.push(item);
            }
          });
          var sortedResults = uniqueResults.sort(function(a, b){
            if(a.restaurant_name > b.restaurant_name){
              return 1
            }
            if(a.restaurant_name < b.restaurant_name){
              return -1
            } else {return 0}
          });
          ResultService.value = sortedResults;
          $location.path('/results')
      })

    }
  };
})
.$inject = ['$location', '$http', '$routeParams', 'Search', 'ResultService']
