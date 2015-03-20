var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("*")
    .get(controllers[route].get)
    .put(controllers[route].put);
}

module.exports = router;