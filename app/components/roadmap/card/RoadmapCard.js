"use client";
import React from "react";
import { useTheme } from "next-themes";

import "./card.css";

const RoadmapCard = ({ data }) => {
  const { theme, setTheme } = useTheme();

  const updateTheme =
    theme === "dark" ? "col-span-1  bg-[url('/roadmap-card.png')] bg-cover"
      : "col-span-1 bg-[#F4F4F4] rounded-xl";

  return (
    <div
      className={`min-h-[144px] ${updateTheme} p-4  rounded-xl`}
    >
      <div className="flex flex-col p-5 gap-4">
        <div className="text-md">{data.title}</div>
        <div className="flex flex-col gap-1">
          {data.bulletPoints.map((item) => (
            <div className={`${theme === "dark" ? "text-[#3EB0FF]" : "text-gradient"} text-sm`}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
