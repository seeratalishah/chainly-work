"use client"
import React, { useEffect, useState } from "react";
import Timeline from "../timeLine/TimeLine";
import RoadmapCard from "./card/RoadmapCard";

const webThreeCards = [
  {
    key: "01",
    title: "MONTH 1-2",
    bulletPoints: ["JANUARY-", "FEBRUARY"],
  },
  {
    key: "02",
    title: "MONTH 3-4",
    bulletPoints: ["MARCH-", "APRIL"],
  },
  {
    key: "03",
    title: "MONTH 5-6",
    bulletPoints: ["MAY-", "JUNE"],
  },
  {
    key: "04",
    title: "MONTH 7-8",
    bulletPoints: ["JULY-", "AUGUST"],
  },
  {
    key: "05",
    title: "MONTH 9-10",
    bulletPoints: ["SEPTEMBER-", "OCTOBER"],
  },
];

const RoadMap = () => { 
  const testSize = useWindowSize();
  const [isWideScreen, setIsWideScreen] = useState();
  useEffect(() => {
    setIsWideScreen(testSize.width >= 1024);
  }, [testSize.width]); 

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="p-8  my-12">
      <h1 className="text-4xl font-bold mb-6">Roadmap</h1>
      <div className={isWideScreen ? "grid grid-cols-5 gap-4 mb-8" : "hidden"}>
        {webThreeCards.map((card) => (
          <RoadmapCard key={card.key} data={card} />
        ))}
      </div>
      <Timeline />
    </div>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
export default RoadMap;
