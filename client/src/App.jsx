import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [workouts, setWorkouts] = useState(null);

  const port = import.meta.env.VITE_PORT;

  const getWorkouts = async () => {
    try {
      const response = await axios.get(`http://localhost:${port}/api/workouts`);
      setWorkouts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching workouts:", error.message);
    }
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div>
      {workouts &&
        workouts.map((i) => {
          return (
            <div key={i._id}>
              <h1>{i.title}</h1>
              <h1>{i.reps}</h1>
              <h1>{i.load}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default App;
