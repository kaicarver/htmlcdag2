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

// models
var Contact = require('./models/Contact'); // majuscule car c'est un Modèle

app.get('/', function (req, res) {
    console.log(path.resolve('index.html'));
    res.sendFile(path.resolve('index.html'));
});

app.post('/submit-form-data', function (req, res) {
    console.log("Prénom :", req.body.firstName);
    const Data = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
    });
    Data.save()
    .then(()=>{
        console.log("Data enregistrée !");
        res.redirect('/');
    })
    .catch(err => console.log(err));
});

var server = app.listen(5000, function () {
    console.log('Express server listening on port ' + server.address().port);
});
