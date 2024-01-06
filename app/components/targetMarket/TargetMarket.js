import React from "react";
import "./targetMarket.css";

const TargetMarket = () => {
  return (
    <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row items-center p-8">
      <img src="/targetMarket.png" alt="image" className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2"/>
      <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
        <h1 className="text-4xl font-bold">Target Market</h1>
        <h1 className="text-4xl font-bold mb-4">(Business)</h1>
        <p className="text-[18px] bullet-point leading-[28px] ml-10">Businesses with long-term projects.</p>
        <p className="text-[18px] bullet-point leading-[28px] ml-10">
          Startups and small businesses requiring flexible workforce solutions.
        </p>
        <p className="text-[18px] bullet-point leading-[28px] ml-10">
          Creative agencies and studios in need of diverse talent for projects.
        </p>
        <p className="text-[18px] bullet-point leading-[28px] ml-10">
          Consulting firms and professional services requiring specific
          expertise.
        </p>
        <p className="text-[18px] bullet-point leading-[28px] ml-10">
          Technology companies and development teams seeking skilled
          professionals.
        </p>
      </div>
    </div>
  );
};

export default TargetMarket;
