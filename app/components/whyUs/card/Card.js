"use client";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Card = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const titleStyle = {
    fontFamily: "Quicksand",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "28px",
  };

  const descStyle = {
    fontFamily: "Quicksand",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "26px",
  };

  return (
    <div
      className={`min-h-[320px] ${
        data.key === "05" ? "col-span-1 lg:col-span-2 md:col-span-2" : "col-span-1"
      } p-4 border border-solid border-grey rounded-xl transition-all cursor-pointer shadow-sm ${
        isHovered ? "bg-gradient-to-br from-blue-500 to-purple-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <h2 className="mb-2 text-3xl font-bold">{data.key}</h2>
        {isHovered && <FiArrowUpRight size={24} />}
      </div>
      <div className="flex flex-col space-y-2">
        {data.items.map((item) => {
          return (
            <>
              <span style={titleStyle}>{item.title}</span>
              <span  style={descStyle}>{item.desc}</span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
