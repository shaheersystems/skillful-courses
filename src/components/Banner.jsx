import React from "react";
import Button from "./Button";
function Banner() {
  return (
    <div className="h-96 px-10 flex items-center">
      <div className="flex-1 flex flex-col space-y-5">
        <h1 className="text-5xl">
          We'll help you get <br />
          skillful sooner.
        </h1>
        <div>
          <Button>
            <span>Learn More </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex-1 h-full w-full bg-neutral-900"></div>
    </div>
  );
}

export default Banner;
