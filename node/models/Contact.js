const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    //firstname: { type: 'string' },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    message: { type: String }
});

module.exports = mongoose.model('Contact', contactSchema);