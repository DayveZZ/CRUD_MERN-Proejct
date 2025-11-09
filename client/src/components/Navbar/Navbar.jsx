import React from "react";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

const Navbar = () => {
  return (
    <>
      <header className="bg-neutral-950 text-neutral-200 text-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-neutral-100">Workout Buddy</h1>
          <div className="flex space-x-6">
            <button className="hover:text-neutral-50 transition-colors cursor-pointer">
              <a href="">Login</a>
            </button>
            <button className="hover:text-neutral-50 transition-colors cursor-pointer">
              <a href="">Signup</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
