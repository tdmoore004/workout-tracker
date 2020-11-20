// Require in Mongoose
const mongoose = require("mongoose");

// Set up Mongoose Schema
const Schema = mongoose.Schema;

// Create new Schema for workout data
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercise: [
    {
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;