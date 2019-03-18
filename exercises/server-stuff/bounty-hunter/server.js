const express = require('express');
const app = express(); 
const mongoose = require('mongoose')


const port = 7777;

app.use(express.json());

app.use('/bounties', require('./routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true}).then( () => console.log('Connected to MongoDB')).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


