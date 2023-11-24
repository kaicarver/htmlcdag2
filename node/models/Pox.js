const mongoose = require('mongoose');

const poxSchema = mongoose.Schema({
    titre: { type: String },
    auteur: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Pox', poxSchema);