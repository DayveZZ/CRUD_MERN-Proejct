import express from "express";
import "./database/connection.js";
import workoutRoutes from "./routes/workout.Router.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// connect to MongoDB after env is loaded
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//Routes
// const Workoutpath = "/api/workouts";
app.use("/api/workouts", workoutRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
