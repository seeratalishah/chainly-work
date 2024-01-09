import React from "react";

const MarketResearch = () => {
  return (
    <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row items-center p-8  my-12">
      <div className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
        <h1 className="text-4xl font-meduim leading-[68px] text-[50px] mb-4 max-w-[480px]">
          Market Research
        </h1>
        <p className="text-[16px] font-thin leading-[28px]">
          45% of freelancers work with at least one other freelancer frequently
          according to a study by Hubstaff. This illustrates that a significant
          share of freelancers already regularly collaborate. Over 90% of large
          companies plan to increase their use of agile, networked teams of
          freelancers over the next 5 years based on Deloitte survey data.
        </p>
        <p className="text-[16px] font-thin leading-[28px]">
          LinkedIn data indicates there has been a 50% increase in demand for
          freelancers with specialized project management skills in the last 3
          years.
        </p>
      </div>
      <img
        src="/marketResearch.png"
        alt="image"
        className="w-full h-full lg:w-1/2 md:w-1/2 sm:w-1/2"
      />
    </div>
  );
};

export default MarketResearch;
