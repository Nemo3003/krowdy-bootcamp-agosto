const express = require('express')
const mongoose = require('mongoose')

const PORT = 8085
const HOST = 'localhost'
const app = express()
mongoose.connect('mongodb://localhost:27017')

const Client = mongoose.model('Client', new mongoose.Schema({
    name: String
}));

app.get('/', (_req, res) => {
    res.send('Welcome! Add your new client: ')
    let client= Client.find()
    return res.send(client)
})

app.get('/register', (req, res) => {
    let name = req.query.name
    console.log('Client being created')
    Client.create({ name: name="Ulises" })    
    console.log('Client created successfully')
    res.send(`Client Registered: ${name}`)
})

app.listen(PORT, HOST)
console.log(`running on http://${HOST}:${PORT}`)