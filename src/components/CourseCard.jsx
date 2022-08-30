import React from "react";
import { Card, Rating, Badge } from "flowbite-react";
function CourseCard() {
  return (
    <div className="lg:w-72 w-96 min-h-sm py-2">
      <Card
        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        href="/course"
      >
        <h5 className="text-xl font-bold">JavaScript: Zero to Hero (ES6)</h5>{" "}
        <p className="text-sm text-gray-600">Jonas Schemendment</p>
        <p className="text-sm text-gray-600">1,392 Students</p>
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
        <p>
          <span className="font-bold">$ 89.99</span>{" "}
          <span className="line-through text-gray-600 pl-3">$ 110.00</span>
        </p>
        <div className="flex">
          <Badge color="warning" size="lg">
            Bestseller
          </Badge>
        </div>
      </Card>
    </div>
  );
}

export default CourseCard;
