import React from "react";
import "./card.css";

const BulletPoint = ({ text }) => (
  <div className="flex items-center mb-2">
    <div className="h-2 w-2 bg-white rounded-full mr-2 shadow-grey-glow"></div>
    <p className="text-xs">{text}</p>
  </div>
);

const Card = ({ data }) => {
  return (
    <div className="relative">
      <div className="w-full h-full">
        <img
          src={`${data.image}`}
          alt="hero half shadow"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col p-5 gap-4">
        <div className="text-xl">{data.title}</div>
        <div className="flex flex-col gap-1">
          {data.bulletPoints.map((item) => (
            <div className="text-[#3EB0FF] text-lg">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
