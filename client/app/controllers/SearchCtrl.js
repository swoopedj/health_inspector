angular.module('inspector.search', [])
.controller('SearchCtrl', function($scope, $http, $routeParams) {
  var controller = this;
  this.search = function(restaurant){
    console.log('search called on SearchCtrl!')
    // $http({method: 'GET', url: '/zip/' + $routeParams.id})
    // .success(function(data){
    //   console.log('success data ========= ======', data)
    //   controller.restaurant = data;
    // });
  };
});