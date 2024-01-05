import React from 'react';
import "./card.css";

const BulletPoint = ({ text }) => (
  <div className="flex items-center mb-2">
    <div className="h-2 w-2 bg-white rounded-full mr-2 shadow-grey-glow"></div>
    <p className='text-xs'>{text}</p>
  </div>
);

const Card = ({ data }) => {
  return (
    <div className="col-span-1 border border-gray rounded-xl p-4">
      <p className="text-md font-bold mb-4">{data.title}</p>
      <div>
        {data.bulletPoints.map((point, index) => (
          <BulletPoint key={index} text={point} />
        ))}
      </div>
    </div>
  );
};

export default Card;
