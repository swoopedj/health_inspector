var appToken = require('../lib/appToken').appToken;
var request = require('request');

module.exports = Results;

Results.parseUserInput = function(userInput){
  //if input is a zip code, call Results.findRestaurantsByZip

  //if input is name of Restaurant call Reults.findRestaurantByName

}

Results.findRestaurantsByZip = function(zip){
  //take in zip code, make GET request to external API 
  return request.get('https://data.austintexas.gov/resource/nguv-n54k.json?address_zip=78728')
    .on('response', function(response){
      console.log('response.body ===============', response.body)
    })

  //return array of restaurant results to client

}

Reults.findRestaurantByName = function(name){
//take in name, make GET request to external API 

//return object with name, address, available inspection scores 
//and their asociated dates, (and Reason for inspection?) to client

} 

Reults.findRestaurantByStreetName = function(name){
//take in street name, search addresses, make GET request to external API 

}
