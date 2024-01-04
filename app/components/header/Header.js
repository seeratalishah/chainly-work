"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuBar from "../menuBar/MenuBar";
import { Button } from "antd";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";

import "./header.css";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="header fixed top-0 z-10 w-full flex items-center justify-between p-8 dark:bg-black opacity-90">
      <h1 className="text-xl font-bold">Chainly.work</h1>
      <div className="flex items-center space-x-5 text-xs">
        <ul className="flex items-center space-x-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/seller">Become a seller</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-5 text-xs">
        <div className="space-x-3">
          <button className="bg-white text-black px-5 py-2 rounded font-bold">
            Sign In
          </button>
          <button className="border px-5 py-2 rounded font-bold">Join</button>
        </div>
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
      </div>
    </div>
  );
};

export default Header;
