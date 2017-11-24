/**
 * importing core modules
 */
var express = require('express');
var Ninja = require('../models/ninja');

/**
 * initilizing core modules
 */
var router = express.Router();


// getting list of all ninjas from db
router.get('/ninjas', function (req, res, next) {
  res.send({
    type: 'GET'
  });
});

// inserting ninja in db
router.post('/ninjas', function (req, res, next) {
  Ninja.create(req.body).then(function (ninja) {
    res.send(ninja);
  }).catch(next);
});

// updating ninja in db
router.put('/ninjas/:id', function (req, res, next) {
  res.send({
    type: 'PUT'
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


module.exports = router;