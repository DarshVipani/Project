const mongoose = require('mongoose')

const scheme = mongoose.Schema({
    id:String,
    Name:String,
    Features:String,
    Price:String,
    Image:String
})

module.exports = mongoose.model('mobilephone',scheme)