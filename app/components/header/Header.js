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
import DropdownButton from "../common/DropdownButton";
import DropdownHamburger from "../common/DropdownHamburger";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!isNavOpen);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    if (theme == "system") {
      setTheme("light");
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`px-2 bg-blur backdrop-blur-lg bg-opacity-50 fixed top-0 z-10 w-full flex items-center justify-between md:px-4 lg:px-14 py-4`}
    >
      <img
        src={theme === "dark" ? "/darkLogo.png" : "/lightLogo.png"}
        alt="logo"
      />

      <div
        className={`lg:flex hidden items-center space-x-5 text-md  ${
          isNavOpen ? "" : ""
        }`}
      >
        <ul className="flex items-center space-x-10 dark:text-gray-200 border-black  font-light">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <DropdownButton title="Browse Jobs" />
          </li>
          <li>
            <DropdownButton title="Chainly Pro" />
          </li>
          <li>
            <Link href="/seller">Become a Seller</Link>
          </li>
        </ul>
      </div>
      <div className={`block lg:hidden`}>
        <DropdownHamburger
          title="Chainly Pro"
          options={[
            { title: "Home", link: "/" },
            { title: "Browse Jobs", link: "/" },
            { title: "Chainly Pro", link: "/" },
            { title: "Become a Seller", link: "/seller" },
          ]}
        />
      </div>

      <div className="flex items-center space-x-5 text-md">
        <div className="space-x-3">
          <button className="border px-8 py-3 rounded-lg font-light dark:border-white border-black cursor-pointer">
            Sign In
          </button>
          <button className="dark:bg-white dark:text-black bg-black text-white px-8 py-3 rounded-lg font-light cursor-pointer">
            Join
          </button>
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
