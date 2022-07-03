
const { json } = require('express')
const mongoose = require('mongoose')
const Workout = require('../models/WorkoutModel')

//get all workouts
const getWorkouts= async (req, res)=>{
    const workouts=await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout= async(req, res)=>{
    const {id} =   req.params
//cconfirmiing if its a valid id
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such workouts"})
}
    const workout=await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) =>{
    const { title, load, reps} = req.body

    try{
const workout= await Workout.create({title, load, reps})
res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout=async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such an id"})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({error:" No such workout"})
    }
    res.status(200).json(workout)
}

//update a workout
const updateWorkout= async (req, res)=>{
const {id}=req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: "No such file"})
}
const workout=await Workout.findOneAndReplace({_id:id}, {
    ...req.body
})
if(!workout){
    return res.status(400).json({error:" No such workout"})
}
res.status(200).json(workout)
}
module.exports = {
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
    createWorkout
}