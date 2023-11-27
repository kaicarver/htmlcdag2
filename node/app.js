var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

var path = require('path');
require('dotenv').config();

var mongoose = require('mongoose');

const url = process.env.DATABASE_URL;
console.log("process.env.DATABASE_URL = " + url);

mongoose.connect(url)
    .then(console.log('Mongodb est connecté'))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

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


app.get('/blogpost', function (req, res) {
    Post.find().then(data => {
        console.log(data);
        res.render('Blog', { data: data });
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

// Correction exercice -- pox = post
var Pox = require('./models/Pox');

// Read Lire tous les poxes
app.get('/allpoxes', function (req, res) {
    Pox.find().then(data => {
        console.log(data);
        res.render('AllPoxes', { data: data });
    }).catch(err => console.log(err));
});

app.get('/formulairepox/', function (req, res) {
    res.render('FormulairePox');
});

app.get('/pox/:id', (req, res) => {
    console.log("id=", req.params.id);
    Pox.findOne({
        _id: req.params.id
    }).then(data => {
        res.render('EditPox', { data: data });
    })
   .catch(err => console.log(err));
});

// Create Créer un pox
app.post('/newpox', function (req, res) {
    const Data = new Pox({
        titre: req.body.titre,
        auteur: req.body.auteur,
        description: req.body.description,
    });
    Data.save()
        .then(() => {
            console.log("Pox enregistré !");
            res.redirect('/allpoxes');
        })
        .catch(err => { console.log(err) });
});

// Update Mise à jour un pox
app.put('/editpox/:id', function (req, res) {
    const Data = {
        titre: req.body.titre,
        auteur: req.body.auteur,
        description: req.body.description
    };
    Pox.updateOne(
        { _id: req.params.id },
        { $set: Data })
        .then(data => {
            console.log("Pox modifié");
            res.redirect('/allpoxes');
        }).catch(err => console.log(err));
});

// Delete Suppression d'un pox
app.delete('/deletepox/:id', function (req, res) {
    Pox.findOneAndDelete({
        _id: req.params.id
    }).then(() => {
        console.log("Pox supprimé");
        res.redirect('/allpoxes');
    })
   .catch(err => console.log(err));
});

// Partie User

var User = require('./models/User');

app.post('/api/inscription', function (req, res) {
    const Data = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        admin: false,
    });
    Data.save()
        .then(() => {
            console.log("User inscrit !");
            res.redirect('/');
        })
        .catch(err => console.log(err));
});
app.get('/forminscription', function (req, res) {
    res.render('Inscription');
});
app.get('/connexion', function (req, res) {
    res.render('Connexion');
});
app.post('/api/connexion', function (req, res) {
    User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            return res.status(404).send('User not found');
        }
        console.log(user);
        if (user.password !== req.body.password) {
            return res.status(404).send('Wrong password');
        }
        User.find().then(all => {
            res.render('UserPage', { data: user, all: all }); // page profil
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});