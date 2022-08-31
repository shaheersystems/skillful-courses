import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react/lib/esm/components";
import { GearIcon, CopyIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
function Test() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    const fetchPosts = () => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading((prevLoading) => !prevLoading);
          setPosts(data);
        });
    };
    fetchPosts();
  }, []);
  return (
    <div
      className={`py-4 px-10 max-h-fit space-y-4 ${
        isLoading ? "flex items-center justify-center flex-col" : ""
      }`}
    >
      {isLoading ? (
        <Spinner aria-label="Large Spinner" size="xl" />
      ) : (
        posts.map((item) => {
          return (
            <div key={item.id} className="border rounded w-96 px-3 py-2">
              <h1 className="font-semibold text-xl">{item.title}</h1>
              <p>{item.body}</p>
              <div className="pt-2 first-letter:h-10 flex justify-between items-center">
                <div className="flex gap-2">
                  <GearIcon height={18} width={18} />
                  <CopyIcon height={18} width={18} />
                </div>
                <div>
                  <DotsVerticalIcon />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Test;
