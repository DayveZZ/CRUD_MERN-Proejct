import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Data } from "../../context/WorkoutContext.jsx";

const Records = () => {
  const PORT = import.meta.env.VITE_PORT || 5000;
  const { workouts, setWorkouts } = useContext(Data);

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

  return (
    <div className="w-full h-full p-4 grid grid-cols-4 gap-4">
      {workouts &&
        workouts.map((i) => (
          <div
            key={i._id}
            className="border-white/40 rounded-lg h-fit p-4 flex flex-col gap-2 bg-black/40"
          >
            <h1>Exercise: {i.title}</h1>
            <h1>Reps: {i.reps} x 3 Reps</h1>
            <h1>Load: {i.load} KG</h1>
            {/* <div className="flex justify-between">
              <button className="btn" onClick={() => toggleUpdateWorkout(i)}>
                Edit
              </button>
              <button className="btn" onClick={() => deleteWorkout(i._id)}>
                Delete
              </button>
            </div> */}
          </div>
        ))}
    </div>
  );
};

export default Records;
