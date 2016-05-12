var express = require('express');
var Path = require('path');
var morgan = require('morgan');
var routes = express.Router();


//route to index.html
var assetFolder = Path.resolve(__dirname, '../client/');
routes.use(express.static(assetFolder));

//api routes
routes.use('/api/*', require('./api/results_api.js'));

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




