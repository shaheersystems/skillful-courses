import React from "react";

function Button({ children }) {
  return (
    <button className="px-4 py-3 flex items-center space-x-2 justify-center bg-neutral-900 text-white">
      {children}
    </button>
  );
}

export default Button;
