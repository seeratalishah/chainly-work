"use client";
import React from 'react';
import { useTheme } from "next-themes";

const Card = ({data}) => {
  const { theme, setTheme } = useTheme();

  const h2Style = {
    textAlign: 'center',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400
  };

  const pStyle = {
    textAlign: 'center',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 100,
    lineHeight: '28px',
  };
  const updateTheme =
  theme === "dark" ? "bg-[url('/solutionCard.png')] bg-cover" : "border border-solid border-grey rounded-xl"
  return (
    <div className={`flex flex-col justify-center items-center p-4  h-[340px] ${updateTheme}`}>
      <img className="" src={data.imageUrl} alt={data.title} width={80} height={80}/>
      <div className="p-4">
        <h2 style={h2Style} className="text-md font-bold mb-2 text-center">{data.title}</h2>
        <p style={pStyle} className="text-xs text-center">{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
