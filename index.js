/**
 * importing core modules
 */
var express = require('express'); //variable with a function access
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/api');

// set up express app
var app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago', {useMongoClient: true});
mongoose.Promise = global.Promise; // using global promise because mongoose promise is depricated

// body parser
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);

// error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function () {
    console.log('listening on 3000')
});