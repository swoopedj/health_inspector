var router = require('express').Router();
var Results = require('../models/results_model.js');

//route for getting zip code results
router.get('/zip/:zip', function(req, res){
  var results = Results.findByZip(req.params.zip)
  .then(function(response){
    res.send(response);
  })
}); 

router.get('/street/:street', function(req, res){
  var results = Results.findByStreet(req.params.street)
  .then(function(response){
    res.send(response);
  })
}); 

router.get('/location/:location', function(req, res){
  var results = Results.findByName(req.params.street)
  .then(function(response){
    res.send(response);
  })
});

router.get('/facility/:id', function(req, res){
  var results = Results.findByFacilityId(req.params.id)
  .then(function(response){
    res.send(response);
  })
}); 

module.exports = router;