import React from "react";
import { Carousel } from "flowbite-react";
import FeaturedCourse from "./FeaturedCourse";
import LeftController from "./LeftController";
import RightController from "./RightController";
function SimpleCarousel() {
  return (
    <div className="h-96 mx-10 bg-gray-200">
      <Carousel
        slide={false}
        leftControl={<LeftController />}
        rightControl={<RightController />}
      >
        <FeaturedCourse />
        <FeaturedCourse />
        <FeaturedCourse />
        <FeaturedCourse />
        <FeaturedCourse />
      </Carousel>
    </div>
  );
}

export default SimpleCarousel;
