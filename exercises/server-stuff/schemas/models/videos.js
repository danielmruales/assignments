const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({

    title: String,
    videoLocation: String,
    fileSize: Number,
    thumbNailImg: Buffer,
    createdOn: {
        type: Date,
        default: Date.now()
    },
    comments: [{
        user:{
            type: objectId,
            ref: 'User'
        },
        comment: String,
        createdOn: {
            type: Date,
            default: Date.now()
        }
    }],
    

})