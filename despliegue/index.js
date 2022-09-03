const { application, response } = require('express');
const express = require('express');
const app = express();
let mysql = require('mysql');

const testing = [
    {
        "id": 1,
        "name": "test name"
    }
]

  app.get('/', (req, res)=>{

    res.json(testing)
})


const PORT = 8085
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
} )
