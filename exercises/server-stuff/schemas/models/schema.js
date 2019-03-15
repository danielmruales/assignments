const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId
const youtubeUser = new mongoose.Schema({

    username: {
            type: String,
            unique: true,
            required: true,
            trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    savedHikes: [{ //This part is referencing another collection named videos. Collection also means another schema file. So another file that contains the properties for videos.
        type: objectId,
        ref: 'Hikes'
    }],
    email: String,
    profileImg: Buffer,
    address: {
        street: String,
        zip: Number,
        country: String,
        state: String
    },
    isAdmin: false


})


module.exports = mongoose.model('Profile', youtubeUser)