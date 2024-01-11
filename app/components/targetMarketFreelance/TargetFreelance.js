"use client"
import { useTheme } from "next-themes";
import React from "react";

const TargetFreelance = () => {
  const {theme} = useTheme();
  return (
    <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row items-center p-8  my-12">
      <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
        <h1 className="text-4xl font-meduim text-[50px] max-w-[480px] leading-[80px]">Target Market</h1>
        <h1 className="text-4xl font-meduim text-[50px] mb-6 max-w-[480px] leading-[80px]">
          (Freelance and People)
        </h1>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2 mb-6`}>
          Freelancers with niche expertise looking for meaningful, collaborative
          work.
        </p>
        <p className={`text-[16px] font-thin ${theme === "dark" ? "bullet-point-dark": "bullet-point-light"} leading-[28px] ml-2`}>
          Project managers and team leaders handling multifaced projects.
        </p>
      </div>
      <img
        src="/targetMarket2.png"
        alt="image"
        className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2"
      />
    </div>
  );
};

export default TargetFreelance;
