var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

var path = require('path');

app.get('/', function(req, res) {
    console.log(path.resolve('index.html'));
  res.sendFile(path.resolve('index.html'));
});

app.post('/submit-student-data', function (req, res) {
    res.send('POST Request');
});
var server = app.listen(5000, function () {
    console.log('Express server listening on port '+ server.address().port);
});
