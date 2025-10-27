import WorkoutModel from "../models/Workout.Model.js";

// Get All Data
const getAllWorkouts = async (req, res) => {
  try {
    const workoutData = await WorkoutModel.find().sort({ createdAt: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Post Data
const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    const workoutData = await WorkoutModel.create({ title, reps, load });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get Single Workout Data
const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await WorkoutModel.findById({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Single Workout Data
const updateWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await WorkoutModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Single Workout Data
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await WorkoutModel.findByIdAndDelete({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export {
  getAllWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
