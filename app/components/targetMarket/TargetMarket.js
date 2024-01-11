"use client"
import { useTheme } from "next-themes";
import React from "react";

const TargetMarket = () => {
    const {theme} = useTheme();
  return (
    <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row items-center p-8  my-12">
      <img src="/targetMarket.png" alt="image" className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2"/>
      <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
        <h1 className="text-4xl font-meduim text-[50px] max-w-[480px] leading-[80px]">Target Market</h1>
        <h1 className="text-4xl font-meduim leading-[80px] text-[50px] max-w-[480px] mb-6">(Business)</h1>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2 mb-4`}>Businesses with long-term projects.</p>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2 mb-4`}>
          Startups and small businesses requiring flexible workforce solutions.
        </p>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2 mb-4`}>
          Creative agencies and studios in need of diverse talent for projects.
        </p>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2 mb-4`}>
          Consulting firms and professional services requiring specific
          expertise.
        </p>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2`}>
          Technology companies and development teams seeking skilled
          professionals.
        </p>
      </div>
    </div>
  );
};

export default TargetMarket;
