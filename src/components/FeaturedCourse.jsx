import { Rating } from "flowbite-react";
import React from "react";
import ftImage from "./featured-img.jpg";
function FeaturedCourse() {
  return (
    <div className="flex h-96 cursor-pointer">
      <div className="flex-1 bg-gray-500 hidden lg:block">
        <img
          className="h-full w-full object-cover border-none"
          loading="lazy"
          src={ftImage}
          alt="featured-img"
        />
      </div>
      <div className="border flex-1 p-6 flex h-full flex-col justify-between bg-white">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold font-serif pb-3">
            Mega WordPress Elementor Bundled Course: 5 Courses included
          </h1>
          <p>
            Learn Elementor and Create 5 Mega Websites with Awesome Distinctive
            Unique Features
          </p>
          <p className="text-sm text-gray-600 pt-3">By Muhammad Shaheer</p>
          <div className="pt-4">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95 out of 5
              </p>
            </Rating>
          </div>
          <p className="text-sm text-gray-600 pt-3">
            33 total hours • 164 lectures • All Levels
          </p>
        </div>
        <div>
          <p className="text-2xl font-semibold font-serif">
            $ 70.00{" "}
            <span className="line-through pl-2 text-gray-600">100.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourse;
