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
      getWorkouts();
      setFormData({ title: "", reps: "", load: "" });
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

  // Handle workout deletion
  const deleteWorkout = async (_id) => {
    await axios.delete(`http://localhost:${PORT}/api/workouts/${_id}`);
    getWorkouts();
  };

  // Handle workout editing
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
    <div className="h-dvh flex flex-col items-center gap-4">
      <h1 className="p-4 uppercase text-2xl">Create your workout plan</h1>
      <div className="w-full">
        {!isEditing && (
          <form onSubmit={createWorkout} className="workoutForm">
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
              placeholder="Load in KG"
              required
              value={formData.load}
              onChange={updateFormField}
            />
            <button className="btn">Submit</button>
          </form>
        )}

        {isEditing && (
          <form onSubmit={updateWorkout} className="workoutForm editForm">
            <input
              type="text"
              name="title"
              placeholder="Title"
              required
              value={updateData.title}
              onChange={editWorkout}
            />
            <input
              type="number"
              name="reps"
              placeholder="Reps"
              required
              value={updateData.reps}
              onChange={editWorkout}
            />
            <input
              type="number"
              name="load"
              placeholder="Load in KG"
              required
              value={updateData.load}
              onChange={editWorkout}
            />
            <button type="submit" className="btn">
              Update
            </button>
            <button
              className="btn ml-4"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </form>
        )}
      </div>

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
    </div>
  );
};

export default App;
