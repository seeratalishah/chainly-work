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
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Slider</h1>
      <SliderCard slides={slides} />
    </div>
  );
};

export default Slider;
