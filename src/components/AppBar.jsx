import React from "react";
import { Link } from "react-router-dom";
function AppBar() {
  return (
    <div className="hidden z-10 sticky top-0 bg-white md:flex items-center h-20 px-10 justify-between border-b border-gray-300">
      <div className="w-1/4">
        <Link to="/">
          <h1 className="text-3xl logo">
            Skillful<span className="text-green-500">.</span>{" "}
          </h1>
        </Link>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <input
          className="w-11/12 py-2 px-5 rounded-full outline-none border border-gray-900"
          type="text"
          placeholder="Search for anything"
        />
      </div>
      <div className="w-1/4 h-full flex items-center justify-end space-x-5">
        <Link
          to="/login"
          className="py-1 px-5 bg-neutral-800 hover:bg-black border border-neutral-600 font-semibold text-white rounded-full"
        >
          Login
        </Link>
        <Link
          to="sign-up"
          className="py-1 px-5 border border-black font-semibold rounded-full"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default AppBar;
