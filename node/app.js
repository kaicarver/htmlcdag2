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

app.set('view engine', 'ejs');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// models
var Contact = require('./models/Contact'); // majuscule car c'est un Modèle
var Post = require('./models/Post');

app.get('/', function (req, res) {
    Contact.find().then(data => {
        console.log(data);
        res.render('Home', { data: data });
    }).catch(err => console.log(err));
});

app.get('/blog', function (req, res) {
    Post.find().then(data => {
        console.log(data);
        res.render('Blog', { data: data });
    }).catch(err => console.log(err));
});

app.get('/formulaire', function (req, res) {
    res.render('Formulaire');
});

app.get('/blogform', function (req, res) {
    res.render('BlogForm');
});

app.get('/formulaire/:id', (req, res) => {
    console.log("id=", req.params.id);
    Contact.findOne({
        _id: req.params.id
    }).then(data => {
        res.render('Edit', { data: data });
    })
    .catch(err => console.log(err));
});

app.get('/post/:id', (req, res) => {
    console.log("id=", req.params.id);
    Post.findOne({
        _id: req.params.id
    }).then(data => {
        res.render('Post', { data: data });
    })
    .catch(err => console.log(err));
});

app.put('/edit/:id', function (req, res) {
    const Data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        message: req.body.message
    };
    Contact.updateOne(
        { _id: req.params.id }, 
        { $set: Data })
        .then(data => {
            console.log("Donnée modifiée :");
            console.log(data);
            res.redirect('/');
        }).catch(err => console.log(err));  
});

app.put('/edit2/:id', function (req, res) {
    const Data = {
        titre: req.body.titre,
        auteur: req.body.auteur,
        description: req.body.description
    };
    Post.updateOne(
        { _id: req.params.id }, 
        { $set: Data })
        .then(data => {
            console.log("Donnée modifiée :");
            console.log(data);
            res.redirect('/blog');
        }).catch(err => console.log(err));  
});

app.delete('/delete/:id', function (req, res) {
    // Contact.deleteOne({
    Contact.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        console.log("Donnée supprimée");
        res.redirect('/');
    })
    .catch(err => console.log(err));
});

app.delete('/delete2/:id', function (req, res) {
    Post.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        console.log("Post supprimé");
        res.redirect('/blog');
    })
    .catch(err => console.log(err));
});

app.post('/submit-form-data', function (req, res) {
    console.log("Prénom :", req.body.firstname);
    const Data = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        message: req.body.message
    });
    Data.save()
        .then(() => {
            console.log("Data enregistrée !");
            res.redirect('/');
        })
        .catch(err => console.log(err));
});

app.post('/submit-blog-data', function (req, res) {
    console.log("Titre :", req.body.titre);
    console.log("req :", req);
    const Data = new Post({
        titre: req.body.titre,
        auteur: req.body.auteur,
        description: req.body.description,
    });
    Data.save()
        .then(() => {
            console.log("Post data enregistrée !");
            res.redirect('/blog');
        })
        .catch(err => console.log(err));
});

var server = app.listen(5000, function () {
    console.log('Express server listening on port ' + server.address().port);
});
