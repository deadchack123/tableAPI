var express = require('express');
var router = express.Router();
const users = require('../users.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users)
});

module.exports = router;
