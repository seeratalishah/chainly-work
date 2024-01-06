import React from "react";

const TargetFreelance = () => {
  return (
    <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row items-center p-8  my-12">
      <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
        <h1 className="text-4xl font-meduim text-[50px] mb-4">Target Market</h1>
        <h1 className="text-4xl font-meduim leading-[68px] text-[50px] mb-4">
          (Freelance and People)
        </h1>

        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">
          Freelancers with niche expertise looking for meaningful, collaborative
          work.
        </p>
        <p className="text-[16px] font-thin bullet-point leading-[28px] ml-10">
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
