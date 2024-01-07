import React from "react";

const Actions = () => {
  return (
    <div className="space-x-3">
      <button className="border lg:px-8 lg:py-3 px-4 py-2 rounded-lg font-light dark:border-white border-black cursor-pointer">
        Sign In
      </button>
      <button className="dark:bg-white dark:text-black bg-black text-white lg:px-8 lg:py-3 px-6 py-2 rounded-lg font-light cursor-pointer">
        Join
      </button>
    </div>
  );
};

export default Actions;
