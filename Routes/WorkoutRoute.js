const express = require('express')
const {
    Get_Workouts,
    Post_Workouts,
    Get_Workout,
    Delete_Workout,
    Update_Workout
} = require('../controllers/WorkoutContoller')

const router = express.Router()

//create CRUD with express Router
//GET requests
router.get('/',Get_Workouts)

//POST request
router.post('/',Post_Workouts)

//GET single Workout 
router.get('/:id',Get_Workout)

//DELETE Request
router.delete('/:id',Delete_Workout)

//update Request
router.patch('/:id',Update_Workout)

//exporting module
module.exports = router