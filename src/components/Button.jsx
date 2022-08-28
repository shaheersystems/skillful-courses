import React from "react";

function Button({ children }) {
  return (
    <button className="px-3 py-2 flex items-center space-x-2 justify-center bg-neutral-900 text-white hover:bg-black rounded-full">
      {children}
    </button>
  );
}

export default Button;
