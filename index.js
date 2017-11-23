/**
 * importing core modules
 */
var express = require('express'); //variable with a function access
var routes = require('./routes/api');

var app = express();
app.use('/api',routes);

app.get('/', function (request, response) {
  response.send("express");
});

app.listen(process.env.port || 3000, function () {
  console.log('listening on 3000')
});