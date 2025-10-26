import express from "express";
import {
  getAllWorkouts,
  getWorkout,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.get("/", getAllWorkouts);
router.get("/:id", getWorkout);

export default router;
