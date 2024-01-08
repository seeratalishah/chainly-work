"use client";
import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import { useTheme } from "next-themes";
import "./timeLine.css";
import RoadOne from "../roadmap/road/RoadOne";

const Timeline = () => {
  const [current, setCurrent] = useState(0);
  const {theme, setTheme} = useTheme();
  const [direction, setDirection] = useState(
    window.innerWidth < 1024 ? "vertical" : "horizontal"
  );
  const [verticle, setVerticle] = useState(
    window.innerWidth < 1024 ? true : false
  );
  const steps = [
    {
      content: <RoadOne currentStep={0} />,
      title: <span className={theme === "dark" ? "text-white" : "text-black"}>MONTH 1-2</span>,
      description: <span id="desc-text">JANUARY-FEBRUARY</span>,
    },
    {
      content: <RoadOne currentStep={1} />,
      title: <span className={theme === "dark" ? "text-white" : "text-black"}>MONTH 3-4</span>,
      description: <span className="text-blue">JANUARY-FEBRUARY</span>,
    },
    {
      content: <RoadOne currentStep={2} />,
      title: <span className={theme === "dark" ? "text-white" : "text-black"}>MONTH 5-6</span>,
      description: <span className="text-blue">JANUARY-FEBRUARY</span>,
    },
    {
      content: <RoadOne currentStep={3} />,
      title: <span className={theme === "dark" ? "text-white" : "text-black"}>MONTH 7-8</span>,
      description: <span className="text-blue">JANUARY-FEBRUARY</span>,
    },
    {
      content: <RoadOne currentStep={4} />,
      title: <span className={theme === "dark" ? "text-white" : "text-black"}>MONTH 9-10</span>,
      description: <span className="text-blue">JANUARY-FEBRUARY</span>,
    },
  ];

  const handleDotClick = (step) => {
    setCurrent(step);
  };
  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth < 1024 ? "vertical" : "horizontal");
      setVerticle(window.innerWidth < 1024 ? true : false);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={window.innerWidth < 1024 ? "flex space-x-6" : "block"}>
      <Steps
        responsive={false}
        style={window.innerWidth < 1024 ? { width: "auto" } : { width: "100%" }}
        current={current}
        progressDot={customDot}
        onChange={handleDotClick}
        direction={direction}
      >
        {steps.map((step, index) => (
          <Steps.Step
            key={index}
            title={verticle ? step.title : ""}
            description={verticle ? step.description : ""}
          />
        ))}
      </Steps>
      <div>{steps[current].content}</div>
    </div>
  );
};

const customDot = (dot, _) => (
  <div onClick={dot.onClick} className="outer-dot">
    <div className="custome-dot"></div>
  </div>
);

export default Timeline;
