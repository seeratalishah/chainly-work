import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

const ThemeToggle = ({ toggleMode, theme }) => {
  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-black bg-white cursor-pointer rounded-full p-1"
      onClick={() => toggleMode()}
    >
      <BsFillMoonStarsFill className="text-white-500" size={18} />
      <div
        className="absolute bg-yellow-500 dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transfrom duration-300"
        style={theme === "dark" ? { right: "2px" } : { left: "2px" }}
      ></div>
      <MdWbSunny className="ml-auto text-yellow-500" size={18} />
    </div>
  );
};

export default ThemeToggle;
