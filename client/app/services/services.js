angular.module('inspector.services', [])
.factory('Search', function($http){
  var getZipResults = function(zip){
    console.log('made it to getZipResults!')
    return $http({
      method: 'GET',
      url:'/api/zip/' + zip
    })
    .catch(function(err){
      console.log('Error in services: ', err)
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
      console.log('Error in services: ', err)
    })
    .then(function(resp){
      return resp.data
    });
  };

  var getNameResults = function(name){
    return $http({
      method: 'GET',
      url: '/api/name/' + name
    })
    .catch(function(err){
      console.log('Error in services: ', err)
    })
    .then(function(resp){
      return resp.data
    });
  };

  var getLocationResults = function(id){
    return $http({
      method: 'GET',
      url: '/api/location/' + id
    })
    .catch(function(err){
      console.log('Error in services: ', err)
    })
    .then(function(resp){
      console.log('Response in getLocationResults: ', resp)
      return resp;
    });
  };

  return {
    getZipResults: getZipResults,
    getStreetResults: getStreetResults,
    getNameResults: getNameResults,
    getLocationResults: getLocationResults
  };
})
.service('ResultService', function(){
  this.value = '';
  this.inspections = '';
})