import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="w-full h-full">
        <img src="/hero.png" alt="hero half shadow" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
        <div className="max-w-500 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Join us & Explore Thousands of Freelancers
          </h1>
          <p className="text-lg">
            Work with talented people at the most affordable price to get the
            most out of your time and cost
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">
          Login
        </button>
        <p className="mt-2">Trust by the world's best</p>
      </div>
    </div>
  );
};

export default HeroSection;
