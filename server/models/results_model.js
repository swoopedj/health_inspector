var appToken = require('../lib/appToken').appToken;
var request = require('request');

var mock_result = require('../../test/server/models/zip_78728_results.js');

var Results = module.exports;

Results.parseUserInput = function(userInput){
  //if input is a zip code, call Results.findRestaurantsByZip

  //if input is name of Restaurant call Reults.findRestaurantByName

}

Results.findByZip = function(zip){
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?zip_code=' + zip
  var options = {
    url: baseUrl,
    'X-App-Token': process.env.API_TOKEN
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!", error);
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
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?$q=' + name
  var options = {
    url: baseUrl,
    'X-App-Token': process.env.API_TOKEN
  };
  console.log('baseUrl = ', baseUrl)
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('NAME response-body-length: ', response.body.length)
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
    'X-App-Token': process.env.API_TOKEN
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('response-body-length: ', response.body.length)
        resolve(response.body);
      }
    });
  });
}

Results.findByLocationId = function(id){
  var baseUrl =  'https://data.austintexas.gov/resource/nguv-n54k.json?facility_id=' + id
  var options = {
    url: baseUrl,
    'X-App-Token': process.env.API_TOKEN
  };
  return new Promise(function(resolve, reject){
    request.get(options,
    function(error, response, body){
      if(error) {
        console.log("Error!", error);
        return error
      } else {
        response.body = JSON.parse(body);
        console.log('LOCATION response-body-length: ', response.body.length)
        resolve(response.body);
      }
    });
  });
}
