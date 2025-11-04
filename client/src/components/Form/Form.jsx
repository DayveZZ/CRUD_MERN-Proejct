import React, { useContext } from "react";
import { Data } from "../../context/WorkoutContext.jsx";

import { IoMdAdd } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

const Form = () => {
  const {
    formData,
    setFormData,
    createWorkout,
    isEditing,
    setIsEditing,
    updateData,
    editWorkout,
    updateWorkout,
  } = useContext(Data);

  const updateFormField = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="border rounded m-4">
      <div className="w-full">
        {!isEditing && (
          <div className="p-4">
            <h1 className="uppercase text-2xl">Create your workout plan</h1>
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
              <button className="btn">
                <IoMdAdd />
              </button>
            </form>
          </div>
        )}

        {isEditing && (
          <div className="p-4">
            <h1 className="uppercase text-2xl">Edit your workout plan</h1>
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
                <RxUpdate />
              </button>
              <button
                className="btn ml-4"
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                <MdCancel />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
