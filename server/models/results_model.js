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
    'Accept': 'application/json',
    'X-App-Token': appToken
  };
  console.log('**************', options)
  return request.get(options)
    .on('response', function(response){
      console.log('response ===============', response.statusCode)
      console.log('response ===============', response.headers)
    });

  //return array of restaurant results to client

}

Results.findByName = function(name){
//take in name, make GET request to external API 

//return object with name, address, available inspection scores 
//and their asociated dates, (and Reason for inspection?) to client

} 

Results.findByStreetName = function(street){
//take in street name, search addresses, make GET request to external API 

}

Results.findByFacilityId = function(id){

}
