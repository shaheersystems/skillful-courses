import React from "react";

function Head({ text }) {
  return (
    <div className="mt-5 h-20 flex items-center justify-between px-10 font-bold text-2xl font-serif">
      <span>{text}</span>
    </div>
  );
}

export default Head;
