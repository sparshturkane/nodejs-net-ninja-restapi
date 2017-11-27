
var Ninja = require('../models/ninja');
var get = function (req, res, next) {
  Ninja.find().then(function (ninja) {
      res.send(ninja);
  });
}

module.exports.get = get;