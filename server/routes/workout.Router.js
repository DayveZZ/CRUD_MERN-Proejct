import express from "express";
import Workout from "../models/Workout.Model.js";
const router = express.Router();

// Create a new workout
router("/", async (req, res) => {
  try {
    const workoutData = await Workout.find().sort({ createdAt: -1 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
