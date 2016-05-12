var routes = require('express').Router();

module.exports = routes;

//route for getting zip code results
routes.get('/zip', function(req, res){
  console.log('req =============:', req);
  return Results.findRestaurantsByZip(req.body);

}); 

//route for getting specific restaurant name results
routes.get('/name', function(req, res){

});