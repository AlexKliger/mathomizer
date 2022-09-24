const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    isHost: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', UserSchema)