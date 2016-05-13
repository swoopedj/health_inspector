var router = require('express').Router();
var Results = require('../models/results_model.js');

//route for getting zip code results
router.get('/zip', function(req, res){
  console.log('a%%%%%%%%%%%%%%%%%')
  // console.log('req =============:', req);
  // return Results.findRestaurantsByZip(req.body);

}); 

// //route for getting specific restaurant name results
// router.get('/name/:name', function(req, res){
//   return Results.findRestaurantByName(req.body);
// });

// //route for getting street name results
// router.get('/street/:street', function(req, res){
//   return Results.findRestaurantByStreetName(req.body);
// });

module.exports = router;