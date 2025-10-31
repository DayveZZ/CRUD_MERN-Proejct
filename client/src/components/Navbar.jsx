import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-16 py-4  bg-white/70 text-black/70 font-semibold">
        <h1 className="text-xl font-bold">Workout Buddy</h1>
        <div className="flex gap-4">
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
