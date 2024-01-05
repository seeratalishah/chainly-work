"use client"
import React from "react";
import { useTheme } from "next-themes";
import "./heroSection.css";

const HeroSection = () => {
    const {theme, setTheme} = useTheme();

  return (
    <div className="hero-section relative">
      <div className="w-full h-full">
        <img
          src="/hero.png"
          alt="hero half shadow"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
        <div className="max-w-500 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Join us & Explore Thousands of Freelancers
          </h1>
          <p className="text-xs mb-4">
            Work with talented people at the most affordable price to get the
            most out of your time and cost
          </p>
        </div>
        <div className="flex items-center space-x-4 mb-4">
          <button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-6 py-3 rounded-full">
            Sign-up for early beta access
          </button>

          <button className="px-6 py-2 border rounded-full dark:border-white text-xs border-black">
            Login
          </button>
        </div>
        <p className="mb-4 text-xs">Designer,Developer,Web,IOS,PHP,Senior,Engineer</p>
        <p className="mb-6 text-xs">Trust by the world's best</p>
        <img src={theme === "dark" ? "/darkText.png" : "/lightText.png"} alt="logo" height={30} width={600}/>
      </div>
    </div>
  );
};

export default HeroSection;
