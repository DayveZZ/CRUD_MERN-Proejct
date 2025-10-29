import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [workouts, setWorkouts] = useState(null);
  const PORT = import.meta.env.VITE_PORT;

  // Fetch workouts from the backend
  const getWorkouts = async () => {
    try {
      const response = await axios.get(`http://localhost:${PORT}/api/workouts`);
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error fetching workouts:", error.message);
    }
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  // Handle form submission to create a new workout
  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: "",
  });

  const createWorkout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:${PORT}/api/workouts`, formData);
      getWorkouts(); // refresh the list
      setFormData({ title: "", reps: "", load: "" }); // clear form
    } catch (error) {
      console.error("Error creating workout:", error.message);
    }
  };

  const updateFormField = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="h-dvh flex flex-col items-center gap-4">
      <h1 className="p-4 uppercase text-2xl">Create your workout plan</h1>
      <div className="w-full p-4">
        <form
          onSubmit={createWorkout}
          className="workoutForm flex justify-between"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={formData.title}
            onChange={updateFormField}
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            required
            value={formData.reps}
            onChange={updateFormField}
          />
          <input
            type="number"
            name="load"
            placeholder="Load"
            required
            value={formData.load}
            onChange={updateFormField}
          />
          <button className="cursor-pointer uppercase bg-black/80 p-2 rounded">
            Submit
          </button>
        </form>
      </div>

      <div className="w-full h-full p-4 grid grid-cols-4 gap-4">
        {workouts &&
          workouts.map((i) => (
            <div
              key={i._id}
              className="border-white/40 rounded-lg h-fit p-4 flex flex-col gap-2 bg-black/40"
            >
              <h1>Exercise: {i.title}</h1>
              <h1>Reps: {i.reps} x 3</h1>
              <h1>Load: {i.load} KG</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
