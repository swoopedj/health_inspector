var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var routes = express.Router();


app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});


app.listen(port, function(){
	console.log('listening on port '+ port);
});

