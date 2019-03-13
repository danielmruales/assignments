const express = require('express');
const app = express();
const data = require('./database');
const uuid = require('uuid');

const port = 6969;

app.use(express.json());

app.get('/todo', (req, res) => {
    res.send(data)
})

app.get('/todo/:id', (req, res) => {
    const {id} = req.params
    const found = data.find(todo => todo.id === id) 
    found ? res.send(found) : res.send('Item not found dillweed!')
})

app.post('/todo', (req, res) => {
    const newObject = req.body; //Body is a part of express, it's what the client puts in 
    newObject.id = uuid.v4();
    data.push(newObject); 
    res.send(data);
})


app.delete('/todo/:id', (req, res) => {
    const {id} = req.params //Are what go after the second / in this case it is :id 
    const index = data.findIndex(todo => todo.id === id)
    data.splice(index, 1)
    res.send('Succesfully out of Your Way.')
})

app.put("/todo/:id", (req, res) => {
    const updatedObject = req.body;
    const {id} = req.params;
    data.forEach(todo => {
        console.log(111,todo.id)
        if(todo.id === id){
            todo = Object.assign(todo, updatedObject); //object.assign allows the server to keep any data that wasn't updated untouched
            
        } else{
            res.send('what you looking for brah?')
        }
    })
    res.send(updatedObject)
})


app.listen(port, () => {
    console.log(`This server is running on port ${port}`)
})