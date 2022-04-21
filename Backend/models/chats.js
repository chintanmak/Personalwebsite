const mongoose = require('mongoose')

const chats = new mongoose.Schema({
    userName: {
        type:String,
        required:true
    },
    message:{
        type:String,
        default:""
    },
    message_id:{
        type:String,
        default:""
    },
    date:{
        type: Date,
        default:Date.now   
    }

})

module.exports = mongoose.model('chats', chats)