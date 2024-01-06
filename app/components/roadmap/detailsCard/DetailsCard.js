import React from "react";

const DetailsCard = ({ data }) => {
  return (
    <div className={`px-4 py-2 flex flex-col space-y-2`}>
        <h2 className="text-md font-bold mb-3">{data.title}</h2>
      {data.bulletPoints.map((item) => <p className="text-xs mb-2">{item}</p>)}
    </div>
  );
};

export default DetailsCard;
