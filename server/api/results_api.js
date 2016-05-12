var routes = require('express').Router();

module.exports = routes;

//route for getting zip code results
routes.get('/zip/:zip', function(req, res){
  console.log('req =============:', req);
  return Results.findRestaurantsByZip(req.body);

}); 

//route for getting specific restaurant name results
routes.get('/name/:name', function(req, res){
  return Results.findRestaurantByName(req.body);
});

//route for getting street name results
routes.get('/street/:street', function(req, res){
  return Results.findRestaurantByStreetName(req.body);
});