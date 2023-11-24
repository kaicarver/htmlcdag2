const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titre: { type: String },
    auteur: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Post', postSchema);