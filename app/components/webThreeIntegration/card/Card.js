"use client";

import React from "react";
import { useTheme } from "next-themes";

import "./card.css";

const BulletPoint = ({ text }) => (
  <div className="flex items-center mb-2">
    <div className="h-2 w-2 bg-white rounded-full mr-2 shadow-grey-glow"></div>
    <p className="text-[14px] font-thin">{text}</p>
  </div>
);

const Card = ({ data }) => {
  const { theme, setTheme } = useTheme();
  const updateTheme =
  theme === "dark" ? "bg-[url('/web3.png')] bg-cover" : "border border-solid border-grey"
  return (
    <div className={`col-span-1 p-4 ${updateTheme} h-[246px] rounded-xl`}>
      <h1 className="text-md text-[38px] mb-4">{data.title}</h1>
      <div>
        {data.bulletPoints.map((point, index) => (
          <BulletPoint key={index} text={point} />
        ))}
      </div>
    </div>
  );
};

export default Card;
