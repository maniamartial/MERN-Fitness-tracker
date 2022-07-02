const express= require('express')
const { createWorkout } = require('../controllers/workoutController')
const { createIndexes } = require('../models/WorkoutModel')
const Workout = require('../models/WorkoutModel')
const router=express.Router()

//GET all workouts
router.get('/', (req, res)=>{
res.json({mssg: "GET all workouts"})
})

//GET single workouts
router.get('/:id', (req, res)=>{
    res.json({mssg: "GET a single workout"})
})

//POST a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', (req, res)=>{
    res.json({mssg: 'Delete a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res)=>{
    res.json({mssg: 'UPDATE a workout'})
})

module.exports=router
