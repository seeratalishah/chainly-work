"use client"
import React, { useState } from 'react';
import { Steps } from 'antd';
import './timeLine.css';
import RoadOne from '../roadmap/road/RoadOne';

const Timeline = () => {
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      content: <RoadOne currentStep={0} />,
    },
    {
      content: <RoadOne currentStep={1} />,
    },
    {
      content: <RoadOne currentStep={2} />,
    },
    {
      content: <RoadOne currentStep={3} />,
    },
    {
      content: <RoadOne currentStep={4} />,
    },
  ];

  const handleDotClick = (step) => {
    setCurrent(step);
  };

  return (
    <>
      <Steps current={current} progressDot={customDot} onChange={handleDotClick}>
        {steps.map((_, index) => (
          <Steps.Step key={index} />
        ))}
      </Steps>
      <div>{steps[current].content}</div>
    </>
  );
};

const customDot = (dot, _) => (
  <div onClick={() => dot.onClick()} className='outer-dot'><div className='custome-dot'></div></div>
);

export default Timeline;
