import React from "react";
import { Link } from "react-router-dom";
function CategoryTag({ category }) {
  return (
    <div className="text-lg bg-stone-900 hover:bg-stone-700 text-white rounded font-semibold font-mono lg:w-56  border-gray-300 flex items-center justify-center">
      <Link to={`/${category.toLowerCase()}`} className="px-4 py-2">
        {category}
      </Link>
    </div>
  );
}

export default CategoryTag;
