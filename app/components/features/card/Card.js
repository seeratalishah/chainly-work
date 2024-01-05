import React from 'react';

const Card = ({data}) => {
  const h2Style = {
    textAlign: 'center',
    fontFamily: 'Gilroy-Bold',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 400
  };

  const pStyle = {
    textAlign: 'center',
    fontFamily: 'Quicksand',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '28px',
  };
  return (
    <div className="flex flex-col justify-center items-center p-4 border border-solid border-grey rounded-xl">
      <img className="" src={data.imageUrl} alt={data.title} width={80} height={80}/>
      <div className="p-4">
        <h2 style={h2Style} className="text-md font-bold mb-2 text-center">{data.title}</h2>
        <p style={pStyle} className="text-xs text-center">{data.desc}</p>
      </div>
    </div>
  );
};

export default Card;
