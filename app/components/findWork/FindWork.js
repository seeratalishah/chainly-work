import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FindWork = () => {
  return (
    <div className="relative w-full">
      <img src="/banner.png" alt="" />
      <div className="banner-font absolute top-1/2 transform -translate-y-1/2 left-10">
        <h1 className="banner-text text-4xl mb-4">
          With talented freelancers do more work.
        </h1>
        <p className="banner-desc text-xs">
          Work with the largest network of independent professionals and get
          things done—from quick turnarounds.
        </p>
        <div className="flex items-center space-x-2 mt-4">
          <button className="flex space-x-2 bg-white text-black rounded-md text-xs py-3 px-4">
            <span>Find Work</span>
            <FiArrowUpRight />
          </button>
          <button className="flex space-x-2 border border-solid border-white text-white rounded-md text-xs py-3 px-4">
            <span>Find Talent</span>
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindWork;
