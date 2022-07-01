require('dotenv').config()
const express = require('express')
const workoutRoutes=require("./routes/workout")
const { reset } = require('nodemon')
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("Listenin on port 4000!!mania")
})


