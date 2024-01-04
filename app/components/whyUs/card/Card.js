"use client";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${
        data.key === "05" ? "col-span-2" : "col-span-1"
      } p-4 border border-solid border-grey rounded-md transition-all cursor-pointer ${
        isHovered ? "bg-gradient-to-br from-blue-500 to-purple-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <h2 className="mb-2 text-xl font-bold">{data.key}</h2>
        {isHovered && <FiArrowUpRight size={24} />}
      </div>
      <div className="flex flex-col space-y-2">
        {data.items.map((item, index) => {
          return (
            <>
              <span className="text-xs font-bold">{item.title}</span>
              <span className="text-xs">{item.desc}</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
