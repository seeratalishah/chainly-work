// pages/index.js
import React from 'react';
import SliderCard from './SliderCard';

const Slider = () => {
  const slides = [
    {
        text: "Slide 1"
    },
    {
        text: "Slide 2"
    },
    {
        text: "Slide 3"
    },
  ];

  return (
    <div className='p-8'>
      <SliderCard slides={slides} />
    </div>
  );
};

export default Slider;
