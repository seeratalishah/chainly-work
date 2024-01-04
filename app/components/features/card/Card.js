import React from 'react';

const Card = ({data}) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 border border-solid border-grey rounded-md">
      <img className="" src={data.imageUrl} alt={data.title} width={80} height={80}/>
      <div className="p-4">
        <h2 className="text-md font-bold mb-2 text-center">{data.title}</h2>
        <p className="text-xs text-center">{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
