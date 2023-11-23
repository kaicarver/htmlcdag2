var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

var path = require('path');

var mongoose = require('mongoose');

const url = "mongodb+srv://kaicarver:Stwotk9dbieqH9xt@cluster0.2rnu6yz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url)
.then(console.log('Mongodb est connecté'))
.catch(err => console.log(err));

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
    res.send('Bonjour ' + name + ',<p>Merci de nous avoir contacté.<p>Nous reviendrons vers vous à cette adresse : ' + req.body.email +
    '<p>Votre message était : <pre>' + req.body.message);
});

var server = app.listen(5000, function () {
    console.log('Express server listening on port ' + server.address().port);
});
