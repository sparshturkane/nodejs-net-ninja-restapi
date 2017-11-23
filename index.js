/**
 * importing core modules
 */
var express = require('express'); //variable with a function access
var bodyParser = require('body-parser');
var routes = require('./routes/api');

var app = express();

app.use(bodyParser.json());
app.use('/api',routes);


app.listen(process.env.port || 3000, function () {
  console.log('listening on 3000')
});