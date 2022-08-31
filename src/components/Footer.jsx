import React from "react";

function Footer() {
  return (
    <div className="bottom-0 h-96 bg-neutral-900">
      <div className="border-b flex justify-between items-center border-gray-100 max-h-fit px-10 py-3">
        <div className="text-white">
          <h1 className="text-xl font-semibold">Teach The World Online.</h1>
          <p>
            Create an online video course, reach students across the globe, and
            earn money
          </p>
        </div>
        <div className="lg:block hidden">
          <button className="py-2 px-4 bg-white text-neutral-900 font-semibold rounded-full">
            Teach On Skillful
          </button>
        </div>
      </div>
      <div className="px-10 py-3 max-h-fit"></div>
    </div>
  );
}

export default Footer;
