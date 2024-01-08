import React from "react";

const DetailsCard = ({ data }) => {
  return (
    <div className={`px-4 py-2 flex flex-col space-y-2`}>
      <h2 className="text-sm font-bold">{data.title1}</h2>
      <div className="flex flex-col space-y-2">
      {data.bulletPoints.map((item) => (
        <p className="bullet-text text-xs">{item}</p>
      ))}
      </div>
    </div>
  );
};

export default DetailsCard;
