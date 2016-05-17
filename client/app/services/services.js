angular.module('inspector.services', [])
.factory('Search', function($http){
  var getZipResults = function(zip){
    console.log('made it to getZipResults!')
    return $http({
      method: 'GET',
      url:'/api/zip/' + zip
    })
    .catch(function(err){
      console.log('ERRor==============', err)
    })
    .then(function(resp){
      console.log('in services: ', resp)
      return resp.data;
    });
  };

  var getStreetResults = function(street){
    return $http({
      method: 'GET',
      url: '/api/street/' + street
    })
    .catch(function(err){
      console.log('ERRor==============', err)
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
    .catch(function(err){
      console.log('ERRor==============', err)
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
})
.service('ResultService', function(){
  this.value = '';
})