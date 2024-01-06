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
    <div className="container mx-auto mt-8  my-12">
      <SliderCard slides={slides} />
    </div>
    </div>
  );
};

export default Slider;
