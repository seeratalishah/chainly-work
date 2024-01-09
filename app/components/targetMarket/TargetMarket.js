import React from "react";

const TargetMarket = () => {
  return (
    <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row items-center p-8  my-12">
      <img src="/targetMarket.png" alt="image" className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2"/>
      <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
        <h1 className="text-4xl font-meduim text-[50px] mb-4 max-w-[480px]">Target Market</h1>
        <h1 className="text-4xl font-meduim leading-[68px] text-[50px] mb-4 max-w-[480px]">(Business)</h1>
        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">Businesses with long-term projects.</p>
        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">
          Startups and small businesses requiring flexible workforce solutions.
        </p>
        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">
          Creative agencies and studios in need of diverse talent for projects.
        </p>
        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">
          Consulting firms and professional services requiring specific
          expertise.
        </p>
        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">
          Technology companies and development teams seeking skilled
          professionals.
        </p>
      </div>
    </div>
  );
};

export default TargetMarket;
