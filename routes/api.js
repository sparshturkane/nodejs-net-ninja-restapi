/**
 * importing core modules
 */
var express = require('express');

/**
 * initilizing core modules
 */
var router = express.Router();


// getting list of all ninjas from db
router.get('/ninjas', function (req, res) {
  console.log(req);
  res.send({
    type: 'GET'
  });
});

// inserting ninja in db
router.post('/ninjas', function (req, res) {
  console.log(req);
  res.send({
    type: 'POST'
  });
});

// updating ninja in db
router.put('/ninjas/:id', function (req, res) {
  console.log(req);
  res.send({
    type: 'PUT'
  });
});

// deeleting ninja from db
router.delete('/ninjas/:id', function (req, res) {
  console.log(req);
  res.send({
    type: 'DELETE'
  });
});


module.exports = router;