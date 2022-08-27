import React from "react";
import { Carousel } from "flowbite-react";
function SimpleCarousel() {
  return (
    <div className="h-16 bg-gray-400">
      <Carousel indicators={false}>
        <div className="text-4xl font-semibold flex items-center justify-center bg-gray-800 text-white border border-gray-100 w-20">
          1
        </div>
        <div className="text-4xl font-semibold flex items-center justify-center bg-gray-800 text-white border border-gray-100 w-20">
          2
        </div>
        <div className="text-4xl font-semibold flex items-center justify-center bg-gray-800 text-white border border-gray-100 w-20">
          3
        </div>
        <div className="text-4xl font-semibold flex items-center justify-center bg-gray-800 text-white border border-gray-100 w-20">
          4
        </div>
        <div className="text-4xl font-semibold flex items-center justify-center bg-gray-800 text-white border border-gray-100 w-20">
          5
        </div>
      </Carousel>
    </div>
  );
}

export default SimpleCarousel;
