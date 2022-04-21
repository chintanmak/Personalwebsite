const mongoose = require('mongoose')

const registerationTemplate = new mongoose.Schema({
    userName: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now   
    }

})

module.exports = mongoose.model('registerationTemplate', registerationTemplate)