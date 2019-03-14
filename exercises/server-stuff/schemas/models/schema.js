const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.objectId
const wanderlustUser = new mongoose.Schema({

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
    savedHikes: [{ //This part is a reference to another collection
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


module.exports = mongoose.model('Profile', wanderlustUser)