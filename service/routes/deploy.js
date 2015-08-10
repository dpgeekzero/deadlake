var express = require('express');
var router = express.Router();
var path = require('path');

var child_process = require('child_process');

router.get('/', function(req, res, next) {
  var build_path = path.join(__dirname, '..', 'build.sh');
  var root_path = path.join(__dirname, '..', '..');
  child_process.execFile('/bin/bash', [build_path], {cwd: root_path}, function(err, stdout, stderr) {
    res.render('deploy', {stdout: stdout, stderr: stderr});
  });

});

module.exports = router;
