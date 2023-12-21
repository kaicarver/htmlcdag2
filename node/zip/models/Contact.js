const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    firstName : {type : 'string'},
    lastName : {type : 'string'},
    email : {type : 'string'},
    message : {type : 'string'}
})

module.exports = mongoose.model('Contact', contactSchema)