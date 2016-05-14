angular.module('inspector.services', [])
.factory('Search', function($http){
  var getZipResults = function(zip){
    console.log('made it to getZipResults!')
    return $http({
      method: 'GET',
      url:'/api/zip/' + zip
    })
    .then(function(resp){
      return resp.data
    });
  };

  var getStreetResults = function(street){
    return $http({
      method: 'GET',
      url: '/api/street/' + street
    })
    .then(function(resp){
      return resp.data
    });
  };

  var getRestaurantResults = function(id){
    return $http({
      method: 'GET',
      url: '/api/restaurant/' + id
    })
    .then(function(resp){
      return resp.data
    });
  };

  return {
    getZipResults: getZipResults,
    getStreetResults: getStreetResults,
    getRestaurantResults: getRestaurantResults
  };
});