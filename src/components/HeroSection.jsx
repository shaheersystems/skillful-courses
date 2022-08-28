import React from "react";

function HeroSection({ heading, text }) {
  return (
    <div className="px-10 h-48 flex items-center flex-col justify-center gap-2 py-2">
      <h1 className="text-3xl font-bold font-serif">Featured Courses</h1>
      <p className="w-3/2 text-center text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        magnam blanditiis illum, harum,
      </p>
    </div>
  );
}

export default HeroSection;
