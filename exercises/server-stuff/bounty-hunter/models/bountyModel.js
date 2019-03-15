const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bountySchema = new Schema ({

    fName: String,
    lName: String,
    type: String,
    alive: { 
        type: Boolean,
        default: true
    },
    type: String,
    reward: Number,
    image: {
        type: String,
        default: 'https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/78d80635-de23-40f5-8c8b-c92f35ca69fa.jpg'
    }
})

module.exports = mongoose.model('Bounty', bountySchema)