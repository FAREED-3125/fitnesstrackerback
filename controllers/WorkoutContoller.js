const { default: mongoose } = require("mongoose");
const Workout = require("../Models/Workout");

//Get Request
const Get_Workouts = async (request, response) => {
  Workout.find()
    .then((resp) => {
      response.status(200).json(resp);
    })
    .catch((err) => response.status(400).json(err.message));
};

//POST request
const Post_Workouts = async (request, response) => {
  const workout = await new Workout(request.body);
  workout
    .save()
    .then((resp) => {
      response.status(200).json(resp);
    })
    .catch((err) => response.status(400).json(err.message));
};

//Get Single Workout
const Get_Workout = async (request, response) => {
  const { id } = request.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
   response.status(404).json({error: 'no such Id'})
  }else{
  Workout.find({ _id: id })
    .then((resp) => {
      response.status(200).json(resp);
    })
    .catch((err) => response.status(400).json(err.message));
  }
};

//Delete Single Request
const Delete_Workout = async (request, response) => {
  const { id } = request.params;
  Workout.findByIdAndDelete({ _id: id })
    .then((resp) => {
      response.status(200).json(resp);
    })
    .catch((err) => response.status(400).json(err.message));
};

//Update Workouts
const Update_Workout = async (request, response) => {
  const { id } = request.params;
  Workout.findByIdAndUpdate({ _id: id }, request.body)
    .then((resp) => {
      response.status(200).json(resp);
    })
    .catch((err) => response.status(400).json(err.message));
};

//exporting module

module.exports = {
  Get_Workouts,
  Post_Workouts,
  Get_Workout,
  Delete_Workout,
  Update_Workout,
};
