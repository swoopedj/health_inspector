var router = require('express').Router();
var Results = require('../models/results_model.js');

//route for getting zip code results
router.get('/zip/:zip', function(req, res){
  return Results.findByZip(req.params.zip);

}); 

router.get('/street/:street', function(req, res){
  return Results.findByZip(req.params.street);
}); 

router.get('/location/:location', function(req, res){
  return Results.findByName(req.params.street);
});

router.get('/facility/:id', function(req, res){
  return Results.findByFacilityId(req.params.id);
}); 

module.exports = router;