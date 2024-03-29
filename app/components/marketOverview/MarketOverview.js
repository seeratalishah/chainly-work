"use client"
import { useTheme } from "next-themes";
import React from "react";

const MarketOverview = () => {
    const {theme} = useTheme();
  return (
    <div className="flex flex-col space-y-10 p-8  my-12">
      <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row">
        <h1 className="text-4xl font-bold leading-[68px] text-[50px] w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
          Market Overview
        </h1>
        <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
          <p className="leading-7 text-[16px] font-thin">
            The global freelance market was valued at $1.5 trillion in 2021,
            expected to reach $2.3 trillion by 2028 (CAGR of 5.2%).
          </p>
          <p className="leading-7 text-[16px] font-thin ">
            The global freelance market was valued at $1.5 trillion in 2021,
            expected to reach $2.3 trillion by 2028 (CAGR of 5.2%). The complex
            project management software market is expected to reach $9.2 billion
            by 2025, up from $2.7 billion in 2020.
          </p>
          <p className="leading-7 text-[16px] font-thin ">
            This shows substantial growth in demand for software to manage
            intricate projects. Global gig economy revenue of $455 billion in
            2021, is projected to reach $591 billion by 2023 (CAGR of 13.2%).
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row">
        <img
          className="w-full h-full lg:w-1/2 md:w-1/2 sm:w-1/2"
          src={`${theme === "dark" ? "/graph1.png" : "/graphLight1.png"}`}
          alt="graph"
          
        />
        <img
          className="w-full h-full lg:w-1/2 md:w-1/2 sm:w-1/2"
          src={`${theme === "dark" ? "/graph2.png" : "/graphLight2.png"}`}
          alt="graph"
        />
      </div>
    </div>
  );
};

export default MarketOverview;
