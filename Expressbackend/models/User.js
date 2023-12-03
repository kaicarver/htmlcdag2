const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {type : 'string', required: true},
    email : {type : 'string', required: true},
    password : {type : 'string', required: true},
    admin : {type : 'boolean'}
})

module.exports = mongoose.model('User', userSchema);