require('dotenv').config()
const express = require('express')
const { reset } = require('nodemon')
const app = express()

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/',(req, res )=>{
    res.json({mssg:"Welcome home buddy"})
})

app.listen(process.env.PORT, ()=>{
    console.log("Listenin on port 4000!!mania")
})


