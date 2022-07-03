const express= require('express')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const { createIndexes } = require('../models/WorkoutModel')
const Workout = require('../models/WorkoutModel')
const router=express.Router()

//GET all workouts
router.get('/',getWorkouts)
/*router.get('/', (req, res)=>{
res.json({mssg: "GET all workouts"})
})*/

//GET single workouts
router.get('/:id', getWorkout)
/*router.get('/:id', (req, res)=>{
    res.json({mssg: "GET a single workout"})
})*/

//POST a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports=router
