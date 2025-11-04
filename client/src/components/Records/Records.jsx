import React, { useEffect, useContext } from "react";
import { Data } from "../../context/WorkoutContext.jsx";

import { MdEdit, MdDelete } from "react-icons/md";

const Records = () => {
  const { workouts, getWorkouts, deleteWorkout, toggleUpdateWorkout } =
    useContext(Data);
  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <>
      <h1 className="uppercase text-2xl font-semibold border-b py-4 mb-4 w-fit mx-auto">
        Your Workout Plans
      </h1>
      <div className="p-4 gap-4 ">
        {workouts &&
          workouts.map((i) => (
            <div
              key={i._id}
              className="border rounded-lg p-4 mb-4 flex justify-between bg-white/20"
            >
              <div className="flex flex-col justify-between">
                <h1>
                  <span className="font-semibold">Exercise:</span> {i.title}
                </h1>
                <h1>
                  <span className="font-semibold">Reps:</span> {i.reps} x 3 Reps
                </h1>
                <h1>
                  <span className="font-semibold">Load:</span> {i.load} KG
                </h1>
              </div>

              <div className="flex flex-col gap-2 justify-between">
                <button className="btn" onClick={() => toggleUpdateWorkout(i)}>
                  <MdEdit />
                </button>
                <button className="btn" onClick={() => deleteWorkout(i._id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Records;
