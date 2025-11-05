import express from "express";
import cors from "cors";
import "./database/connection.js";
import workoutRoutes from "./routes/workout.Router.js";
import userRoutes from "./routes/user.Routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// connect to MongoDB after env is loaded
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Routes
const WorkoutPath = "/api/workouts";
const userLoginPath = "/api/user/login";
const userSignupPath = "/api/user/signup";
app.use(WorkoutPath, workoutRoutes);
app.use(userLoginPath, userRoutes);
app.use(userSignupPath, userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
