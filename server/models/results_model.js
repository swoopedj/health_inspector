var appToken = require('../lib/appToken').appToken;
var request = require('request');

var Results = module.exports;

Results.parseUserInput = function(userInput){
  //if input is a zip code, call Results.findRestaurantsByZip

  //if input is name of Restaurant call Reults.findRestaurantByName

}

Results.findByZip = function(zip){
  //take in zip code, make GET request to external API
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?zip_code=' + zip
  var options = {
    url: baseUrl,
    'X-App-Token': appToken
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!!!!!!!!!!!!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('response-body-length: ', response.body.length)
        resolve(response.body);
      }
    });
  });
  

}

Results.findByName = function(name){
//take in name, make GET request to external API 
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?zip_code=' + name
  var options = {
    url: baseUrl,
    'X-App-Token': appToken
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!!!!!!!!!!!!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('response-body-length: ', response.body.length)
        resolve(response.body);
      }
    });
  });
//return object with name, address, available inspection scores 
//and their asociated dates, (and Reason for inspection?) to client

} 

Results.findByStreetName = function(street){
//take in street name, search addresses, make GET request to external API 
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?zip_code=' + street
  var options = {
    url: baseUrl,
    'X-App-Token': appToken
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!!!!!!!!!!!!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('response-body-length: ', response.body.length)
        resolve(response.body);
      }
    });
  });
}

Results.findByFacilityId = function(id){
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?zip_code=' + id
  var options = {
    url: baseUrl,
    'X-App-Token': appToken
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!!!!!!!!!!!!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('response-body-length: ', response.body.length)
        resolve(response.body);
      }
    });
  });
}
