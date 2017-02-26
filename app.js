var express = require('express');
var app = express();
var path = require('path');
var api = require('./api');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/whoami', api);

var port = process.env.PORT;
app.listen(port, function() {
  console.log('App listening on port '+ port);
});