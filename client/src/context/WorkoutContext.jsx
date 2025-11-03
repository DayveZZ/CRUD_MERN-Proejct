import { createContext, useState } from "react";

import axios from "axios";
const PORT = import.meta.env.VITE_PORT || 3000;

export const Data = createContext();

const WorkoutContext = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  // const [isEditing, setIsEditing] = useState(false);

  // GET Request
  const getWorkouts = async () => {
    try {
      const response = await axios.get(`http://localhost:${PORT}/api/workouts`);
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error fetching workouts:", error.message);
    }
  };

  // POST Request
  const createWorkout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:${PORT}/api/workouts`, formData);
      getWorkouts();
      setFormData({ title: "", reps: "", load: "" });
    } catch (error) {
      console.error("Error creating workout:", error.message);
    }
  };
  const [formData, setFormData] = useState({
    title: "",
    reps: "",
    load: "",
  });

  // DELETE Request
  const deleteWorkout = async (_id) => {
    await axios.delete(`http://localhost:${PORT}/api/workouts/${_id}`);
    getWorkouts();
  };

  // PATCH Request
  const [isEditing, setIsEditing] = useState(false);
  const [updateData, setUpdateData] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  const editWorkout = async (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value,
    });
  };
  const toggleUpdateWorkout = (e) => {
    console.log(e);
    setIsEditing(true);
    setUpdateData({
      _id: e._id,
      title: e.title,
      reps: e.reps,
      load: e.load,
    });
  };
  const { _id, title, reps, load } = updateData;

  const updateWorkout = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:${PORT}/api/workouts/${_id}`, {
        title,
        reps,
        load,
      });

      getWorkouts();
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating workout:", err.message);
    }
  };

  return (
    <Data.Provider
      value={{
        workouts,
        setWorkouts,
        getWorkouts,
        formData,
        setFormData,
        createWorkout,
        deleteWorkout,
        isEditing,
        setIsEditing,
        updateData,
        setUpdateData,
        editWorkout,
        toggleUpdateWorkout,
        updateWorkout,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default WorkoutContext;
