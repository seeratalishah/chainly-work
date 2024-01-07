import React from "react";

const DetailsCard = ({ data }) => {
  return (
    <div className={`px-4 py-2 flex flex-col space-y-2`}>
      <h2 className="text-md font-bold mb-3">{data.title1}</h2>
      {data.bulletPoints1.map((item) => (
        <p className="text-xs mb-2">{item}</p>
      ))}
      <h2 className="text-md font-bold mb-3">{data.title2}</h2>
      {data.bulletPoints2.map((item) => (
        <p className="text-xs mb-2">{item}</p>
      ))}
    </div>
  );
};

export default DetailsCard;
