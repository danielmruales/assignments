const express = require('express');
const app = express(); 
const data = require('./database')
const uuid = require('uuid')
const mongoose = require('mongoose')


const port = 7777;

app.use(express.json());

app.use('/bounties', require('./routes/bountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true}).then( () => console.log('Connected to MongoDB')).catch(err => console.log(err))





app.get('/bounties', (req, res)=>{
    res.send(data)
})

app.get('/bounties/:id', (req, res)=> {
    const {id} = req.params;
    const found = data.find(bounty => bounty.id === id);
    found ? res.send(found) : res.send('Bounty Not Found, Go Find Them!')
})

app.post('/bounties', (req, res) => {
    const newBounty = req.body;
    newBounty.id = uuid.v4();
    data.push(newBounty);
    res.send(newBounty);
})

app.delete('/bounties/:id', (req, res) => {
    const {id} = req.params;
    const index = data.findIndex(bounty => bounty.id === id);
    data.splice(index,1);
    res.send('Successfully Erased Bounty.')
})

app.put('/bounties/:id', (req, res) => {
    const updatedBounty = req.body;
    const {id} = req.params;
    data.forEach( bounty => {
        if(bounty.id === id)
        bounty = Object.assign(bounty, updatedBounty);
        // res.send(bounty)
    })
    let found = data.find(bounty => bounty.id === id)
    found ? res.send(bounty) : res.send('No Bounty Was Changed.')
    // console.log(updatedBounty

})




app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})


// .get((req,res) => {
//     Vacation.find((err, vacation))
// })