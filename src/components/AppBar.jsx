import React from "react";
function AppBar() {
  return (
    <div className="flex items-center h-20 px-10 justify-between border-b border-gray-300">
      <div className="w-1/4">
        <h1 className="text-3xl">Skillful.</h1>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <input
          className="w-11/12 py-3 px-5 rounded-full outline-none border border-gray-900"
          type="text"
          placeholder="Search for anything"
        />
      </div>
      <div className="w-1/4 h-full flex items-center justify-end space-x-5">
        <button className="py-1 px-5 bg-neutral-800 border border-neutral-600 font-semibold text-white">
          Login
        </button>
        <button className="py-1 px-5 border border-black font-semibold">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default AppBar;
