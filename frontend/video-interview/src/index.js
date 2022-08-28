const { application, response } = require('express');
const express = require('express');
const app = express();
import {QuestionDetailContainer} from "./views/Questions/QuestionDetailContainer"
import {Login} from "./components/auth/pages/Login"

app.get('/',(req,res)=>{
    res.send(Login)
})
const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})