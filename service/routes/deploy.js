var express = require('express');
var router = express.Router();

var child_process = require('child_process')

/* GET users listing. */
router.get('/', function(req, res, next) {
  output = child_process.execFileSync('/bin/bash', ['build.sh'])
  res.send('re-deploying: ' + output);

});

module.exports = router;
