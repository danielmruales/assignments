const express = require('express');
const bountyRoute = express.Router();
const Bounty = require('../models/bountyModel');

bountyRoute.route('/')
.get((req, res) => {
    Bounty.find((err, bounties) => err ? res.status(500).send(err) : res.status(200).send(bounties))
})

.post((req, res) => {
    const newBounty = new Bounty(req.body)
    newBounty.save(err => {
        if(err) {
            return res.status(500).send(err)
        } else {
            return res.status(200).send(newBounty)
        }
    })
})

bountyRoute.route('/:id')
.put((req, res) =>{
    const {id} = req.params;
    Bounty.findOneAndUpdate(
        {_id: id},
        req.body,
        (err , bounty) => {
            if(err) {
                return res.status(500).send(err)
            } else {
                return res.status(200).send('Upated successfully!')
            }
        }
    )
})

.delete((req, res) => {
    const {id} = req.params;
    Bounty.findOneAndDelete(
        {_id: id},
        err => err ? res.status(500).send(err) : res.status(200).send('Successfully Delted!')
    )
})

.get((req, res) =>{
    const {id} = req.params;
    Bounty.findById(
        {_id: id},
        (err, bounty) => err ? res.status(500).send(err) : res.status(200).send(bounty))
})

module.exports =  bountyRoute;