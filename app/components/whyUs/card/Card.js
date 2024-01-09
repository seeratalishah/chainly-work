"use client";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "next-themes";

const Card = ({ data }) => {
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const titleStyle = {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "28px",
    marginBottom: "4px",
  };

  const descStyle = {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 100,
    lineHeight: "26px",
  };

  const updateTheme =
    theme === "dark"
      ? data.key === "05"
        ? "col-span-1 md:col-span-2 lg:col-span-2  bg-[url('/whyusRectangle2.png')] bg-cover"
        : "col-span-1  bg-[url('/whyusRectangle.png')] bg-cover"
      : data.key === "05"
      ? "col-span-1 md:col-span-2 lg:col-span-2 border border-solid border-grey rounded-xl"
      : "col-span-1 border border-solid border-grey rounded-xl";

  return (
    <div
      className={`min-h-[350px] ${updateTheme} p-4  rounded-xl transition-all cursor-pointer shadow-sm ${
        isHovered ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <h2 className="mb-2 text-3xl font-['GilroyBold']">{data.key}</h2>
        {isHovered && <FiArrowUpRight size={24} />}
      </div>
      <div className="flex flex-col space-y-2">
        {data.items.map((item,index) => {
          return (
            <div key={index}>
              <p style={titleStyle}>{item.title}</p>
              <p style={descStyle}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
