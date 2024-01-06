"use client";
import React from "react";
import { useTheme } from "next-themes";
import "./heroSection.css";

const HeroSection = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hero-section w-full h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-500 text-center mb-4">
          <h1 className="font-['GilroyBold'] text-[40px] mb-4">
            Join us & Explore Thousands of Freelancers
          </h1>
          <p className="font-Quicksand font-thin mb-4">
            Work with talented people at the most affordable price to get the
            most out of your time and cost
          </p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-6 py-3 rounded-full ">
            Sign-up for early beta access
          </button>

          <button className="px-6 py-2 border rounded-full dark:border-white text-xs border-black ">
            Log in
          </button>
        </div>
        <p className="mb-6 font-Quicksand font-thin">
          Designer,Developer,Web,IOS,PHP,Senior,Engineer
        </p>
        <p className="mb-6 text-xs">Trust by the world's best</p>
        <img
          src={theme === "dark" ? "/darkText.png" : "/lightText.png"}
          alt="logo"
          height={30}
          width={600}
        />
      </div>
    </div>
  );
};

export default HeroSection;
