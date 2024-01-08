"use client"
import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import Timeline from "../timeLine/TimeLine";

const webThreeCards = [
  {
    key: "01",
    title: "MONTH 1-2",
    image: "/Rectangle 54.png",
    bulletPoints: ["JANUARY-", "FEBRUARY"],
  },
  {
    key: "02",
    title: "MONTH 3-4",
    image: "/Rectangle 55.png",
    bulletPoints: ["MARCH-", "APRIL"],
  },
  {
    key: "03",
    title: "MONTH 5-6",
    image: "/Rectangle 56.png",
    bulletPoints: ["MAY-", "JUNE"],
  },
  {
    key: "04",
    title: "MONTH 7-8",
    image: "/Rectangle 57.png",
    bulletPoints: ["JULY-", "AUGUST"],
  },
  {
    key: "05",
    title: "MONTH 9-10",
    image: "/Rectangle 58.png",
    bulletPoints: ["SEPTEMBER-", "OCTOBER"],
  },
];

const RoadMap = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    // Check if window is defined (client side)
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="p-8  my-12">
      <h1 className="text-4xl font-bold mb-6">Roadmap</h1>
      <div className={isWideScreen ? "grid grid-cols-5 gap-4 mb-8" : "hidden"}>
        {webThreeCards.map((card) => (
          <Card data={card} />
        ))}
      </div>
      <Timeline />
    </div>
  );
};

export default RoadMap;
