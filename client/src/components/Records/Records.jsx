import React, { useEffect, useContext } from "react";
import { Data } from "../../context/WorkoutContext.jsx";

const Records = () => {
  const { workouts, getWorkouts, deleteWorkout, toggleUpdateWorkout } =
    useContext(Data);
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
            <div className="flex justify-between">
              <button className="btn" onClick={() => toggleUpdateWorkout(i)}>
                Edit
              </button>
              <button className="btn" onClick={() => deleteWorkout(i._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Records;
