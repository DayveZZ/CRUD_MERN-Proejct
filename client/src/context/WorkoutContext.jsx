import { createContext, useState } from "react";

export const Data = createContext();

const WorkoutContext = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <Data.Provider value={{ workouts, setWorkouts }}>{children}</Data.Provider>
  );
};

export default WorkoutContext;
