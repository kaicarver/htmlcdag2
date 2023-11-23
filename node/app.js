var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

var path = require('path');

app.get('/', function (req, res) {
    console.log(path.resolve('index.html'));
    res.sendFile(path.resolve('index.html'));
});

app.post('/submit-student-data', function (req, res) {
    console.log("Prénom :", req.body.firstName);
    var name = req.body.firstName + " " + req.body.lastName;
    res.send('Merci de avoir rempli le formulaire, ' + name);
});

app.post('/submit-form-data', function (req, res) {
    console.log("Prénom :", req.body.firstName);
    var name = req.body.firstName + " " + req.body.lastName;
    res.send('Bonjour ' + name + ',<p>Merci de nous avoir contacté.<p>Nous reviendrons vers vous à cette adresse : ' + req.body.email);
});

var server = app.listen(5000, function () {
    console.log('Express server listening on port ' + server.address().port);
});
