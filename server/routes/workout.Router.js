import express from "express";
import {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
} from "../controllers/workout.controller.js";

const router = express.Router();

router.route("/").get(getAllWorkouts).post(createWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout);

export default router;
