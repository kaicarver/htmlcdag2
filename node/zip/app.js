//imports libraries
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false }));

var path = require('path');

var mongoose = require('mongoose');

const url = "mongodb+srv://fredericnad:fred123@cluster0.p6elgqd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
.then(console.log("Mongodb connected"))
.catch(err => console.log(err));

app.set('view engine', 'ejs');

const methodOverride = require('method-override');
app.use(methodOverride("_method"));

//models
//Partie Contact
var Contact = require('./models/Contact');



app.get('/', function(req, res) {
    Contact.find().then( data => {
        console.log(data);
        res.render('Home', {data: data});
    }).catch(err => console.log(err));
})

app.get('/formulaire', function(req, res) {
    res.render('Formulaire');
});

app.post('/submit-form-data', function(req, res) {
    const Data = new Contact({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        message : req.body.message
    })
    Data.save()
    .then(() =>{
        console.log("Data saved !");
        res.redirect("/");
    })
    .catch(err => console.log(err));
});

app.get('/formulaire/:id', function(req, res){
    //affiche une donnée en fonction de l'id en parametre
    Contact.findOne({
        _id : req.params.id
    }).then(data =>{
        res.render('Edit', {data:data})
    })
    .catch(err => console.log(err));
})

//Mise a jour de ma donnée : Edit
app.put('/edit/:id', function(req, res){
    const Data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        message : req.body.message
    }
    Contact.updateOne({_id : req.params.id}, {$set:Data})
    .then(data =>{
        console.log("Donnée mise à jour :");
        console.log(data);
        res.redirect('/');
    })
    .catch(err =>{console.log(err);})
});

//Suppression d'un contact avec l'id
app.delete('/delete/:id', function(req, res) {
    Contact.findOneAndDelete({_id:req.params.id})
    .then(() =>{
        console.log("Donnée supprimée.");
        res.redirect('/');
    })
    .catch(err =>{console.log(err);});
});

//Partie Blog

var Post = require('./models/Post');
//Read (Lire toutes les posts)
app.get('/allposts', function(req, res) {
    Post.find().then(data =>{
        console.log(data);
        res.render('AllPosts' , {data: data});
    })
    .catch(err =>{console.log(err)});
});

app.get('/formulairepost', function(req, res) {
    res.render('FormulairePost');
});

app.get('/post/:id', function(req, res) {
    Post.findOne({_id: req.params.id})
    .then(data =>{
        res.render('EditPost', {data: data});
    })
    .catch (err =>{console.log(err)});
});

//Create (Créer un post)
app.post('/newpost', function(req, res) {
    const Data = new Post({
        titre : req.body.titre,
        auteur : req.body.auteur,
        description : req.body.description
    })
    Data.save()
    .then(() =>{
        console.log("Post saved");
        res.redirect('/allposts')
    })
    .catch(err => {console.log(err);})
});

//Update (Mise à jour d'un post)
app.put('/editPost/:id', function(req, res) {
    const Data = 
    {
        title : req.body.title,
        auteur : req.body.auteur,
        description : req.body.description
    }
    Post.updateOne({_id : req.params.id}, {$set: Data})
    .then(() => {
        console.log("Post updated successfully");
        res.redirect('/allposts');
    })
    .catch((err) => {console.log(err);});
});

//delete (Suppression d'un post)
app.delete('/deletePost/:id', function(req, res) {
    Post.findOneAndDelete({_id : req.params.id})
    .then(()=>{
        console.log("Post deleted successfully");
        res.redirect('/allposts');
    })
    .catch((err) => {console.log(err);});
});



var server = app.listen(5000, function () {
    console.log("Node server is listening on port 5000");
});
