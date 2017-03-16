// PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');

// CREATE APP //
var app = express();

// VIEW ENGINE //
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

// MIDDLEWARE //
app.use(express.static(__dirname));

// ROUTES //
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ERROR HANDLER //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

// SERVE APP //
var port = 8000;
app.listen(port, function () {
  console.log('running at localhost:' + port);
});
