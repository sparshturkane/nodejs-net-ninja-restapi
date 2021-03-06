/**
 * importing core modules
 */
var express = require('express');
var Ninja = require('../models/ninja');
var request = require('request');
var ninjaController = require('../controllers/ninjasController');

/**
 * initilizing core modules
 */
var router = express.Router();


// getting list of all ninjas from db
router.get('/ninjas', ninjaController.get);

// inserting ninja in db
router.post('/ninjas', function (req, res, next) {
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

// updating ninja in db
router.put('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then(function () {
        Ninja.findOne({
            _id: req.params.id
        }).then(function (ninja) {
            res.send(ninja);
        });
    });
});

// deleting ninja from db
router.delete('/ninjas/:id', function (req, res, next) {
    Ninja.findByIdAndRemove({
        _id: req.params.id
    }).then(function (ninja) {
        res.send(ninja);
    });
});

// get/
router.get('/', function (req, res, next) {
  request('https://app-srt.b2x.com/consumer-portal/api/countryCheck/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var responseObj = JSON.parse(response.body);
    // console.log(responseObj.body);
    res.send(responseObj);
  });
});


module.exports = router;