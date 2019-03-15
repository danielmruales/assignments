const moongoose = require('mongoose');
const Profile = require('./../models/schema')
moongoose.connect('mongodb://localhost:27017/bountyhunter', {useNewUrlParser: true}).then(()=> console.log('Database is now connected.'))

youtubeRoute.get('/', (req, res) => {
    Profile.find((err, profiles))
})