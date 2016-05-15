var express = require('express');
var Path = require('path');
var morgan = require('morgan');
require('es6-promise').polyfill();
var routes = express.Router();
var results_api = require('./api/results_api.js')

routes.use(morgan('dev'));


//route to index.html
var assetFolder = Path.resolve(__dirname, '../client/');
routes.use(express.static(assetFolder));

//api routes
routes.use('/api', results_api, function(){console.log('made it to server.js')});

if(process.env.NODE_ENV !== 'test'){
  routes.get('/*', function(request, response){
    response.sendFile(assetFolder + '/index.html');
  });

  //create server
  var app = express();
  app.use(require('body-parser').json())

  //main router
  app.use('/', routes)

  //start server
  var port = process.env.PORT || 8080;
  app.listen(port, function(){
    console.log('listening on port '+ port);
  });
} else {
  //for test env
  module.exports = routes;
}




