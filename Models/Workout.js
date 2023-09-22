const mongoose = require("mongoose");
const schema = mongoose.Schema;



const Workout_schema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    set: {
      type: Number,
      required: true,
    },
    BurnCalorie: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Workout_Model = mongoose.model("workout", Workout_schema);

//module exporting
module.exports = Workout_Model;
