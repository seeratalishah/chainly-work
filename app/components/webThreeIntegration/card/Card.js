"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

import "./card.css";

const BulletPoint = ({ text, theme }) => (
  <div className="flex items-center mb-2">
    <div className={`h-2 w-2 ${theme === "dark" ? "bg-dark-gradient" : "bg-light-gradient"} rounded-full mr-2 shadow-grey-glow`}></div>
    <p className="text-[14px] font-thin">{text}</p>
  </div>
);

const Card = ({ data }) => {
  const { theme, setTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const updateTheme =
  theme === "dark" ? "bg-[url('/web3.png')] bg-cover" : "border border-solid border-grey"
  return (
    <div className={`col-span-1 p-4 ${updateTheme} h-[246px] rounded-xl ${isHovered ? "my-div" : ""}`} onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <h1 className="text-md text-[38px] mb-4">{data.title}</h1>
      <div>
        {data.bulletPoints.map((point, index) => (
          <BulletPoint key={index} text={point} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Card;
