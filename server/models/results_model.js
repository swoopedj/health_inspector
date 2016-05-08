var appToken = require('../lib/appToken').appToken;

module.exports = Results;

Results.parseUserInput = function(userInput){
  //if input is a zip code, call Results.findRestaurantsByZip

  //if input is name of Restaurant call Reults.findRestaurantByName

}

Results.findRestaurantsByZip = function(zip){
  //take in zip code, make GET request to external API 

  //return array of restaurant results to client

}

Reults.findRestaurantByName = function(name){
//take in name, make GET request to external API 

//return object with name, address, available inspection scores 
//and their asociated dates, (and Reason for inspection?) to client

}