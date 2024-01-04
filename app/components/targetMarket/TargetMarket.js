import React from "react";
import "./targetMarket.css";

const TargetMarket = () => {
  return (
    <div className="flex items-center p-8">
      <img src="/targetMarket.png" alt="image" style={{ width: "50%" }} />
      <div style={{ width: "50%" }}>
        <h1 className="text-xl font-bold">Target Market</h1>
        <h1 className="text-xl font-bold mb-4">(Business)</h1>
        <p className="text-xs bullet-point">Businesses with long-term projects.</p>
        <p className="text-xs bullet-point">
          Startups and small businesses requiring flexible workforce solutions.
        </p>
        <p className="text-xs bullet-point">
          Creative agencies and studios in need of diverse talent for projects.
        </p>
        <p className="text-xs bullet-point">
          Consulting firms and professional services requiring specific
          expertise.
        </p>
        <p className="text-xs bullet-point">
          Technology companies and development teams seeking skilled
          professionals.
        </p>
      </div>
    </div>
  );
};

export default TargetMarket;
