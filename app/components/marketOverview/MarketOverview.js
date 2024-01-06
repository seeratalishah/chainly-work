import React from "react";

const MarketOverview = () => {
  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row">
        <h1 className="text-4xl font-bold leading-[68px] text-[58px] w-full lg:w-1/2 md:w-1/2 sm:w-1/2">Market Overview</h1>
        <p className="text-sm leading-7 text-[18px] w-full lg:w-1/2 md:w-1/2 sm:w-1/2">
          The global freelance market was valued at $1.5 trillion in 2021,
          expected to reach $2.3 trillion by 2028 (CAGR of 5.2%). The complex
          project management software market is expected to reach $9.2 billion
          by 2025, up from $2.7 billion in 2020. This shows substantial growth
          in demand for software to manage intricate projects. Global gig
          economy revenue of $455 billion in 2021, is projected to reach $591
          billion by 2023 (CAGR of 13.2%).
        </p>
      </div>
      <div className="flex flex-col sm:flex-row md-flex-row lg-flex-row">
        <img className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2" src="/graph1.png" alt="graph"/>
        <img className="w-full lg:w-1/2 md:w-1/2 sm:w-1/2" src="/graph2.png" alt="graph"/>
      </div>
    </div>
  );
};

export default MarketOverview;
