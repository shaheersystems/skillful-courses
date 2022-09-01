import React from "react";
import { Avatar } from "flowbite-react";
function ReviewCard() {
  return (
    <div className="h-48 w-96 hover:border-yellow-50 hover:bg-yellow-50 rounded px-4 border cursor-pointer transition-all">
      <div className="h-16 flex space-x-2 items-center justify-start py-1">
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          size="md"
        />
        <div>
          <h1 className="font-semibold">Ryan Florence</h1>
          <p className="text-sm text-gray-600">Student of web development</p>
        </div>
      </div>
      <div className="py-2">
        <p>
          I love Skillful I've absolutely loved learning from here. This
          platform has helped me learn my dream skills.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
