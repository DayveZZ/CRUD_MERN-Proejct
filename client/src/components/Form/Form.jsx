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
    <div className="rounded-lg bg-white shadow-lg h-fit mt-20">
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
              <button className="btn bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 transition-colors duration-200">
                <IoMdAdd />
              </button>
            </form>
          </div>
        )}

        {isEditing && (
          <div className="p-4">
            <h1 className="uppercase text-2xl">Edit your workout plan</h1>
            <form onSubmit={updateWorkout} className="workoutForm">
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
              <div className="flex gap-4 items-center">
                <button
                  type="submit"
                  className="btn  bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 transition-colors duration-200"
                >
                  <RxUpdate />
                </button>
                <button
                  className="btn bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 transition-colors duration-200"
                  onClick={() => {
                    setIsEditing(false);
                  }}
                >
                  <MdCancel />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
