"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import DropdownHamburger from "../common/DropdownHamburger";
import ThemeToggle from "../common/ThemeToggle";
import Actions from "../actions/Actions";
import MenuBar from "../menuBar/MenuBar";

import "./header.css";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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

      <div className="lg:flex hidden">
      <MenuBar />
      </div>
      <div className={`block lg:hidden`}>
        <DropdownHamburger toggleMode={toggleMode} theme={theme} />
      </div>

      <div className="lg:flex hidden items-center space-x-5 text-md">
        <Actions />
        <ThemeToggle toggleMode={toggleMode} theme={theme} />
      </div>
    </div>
  );
};

export default Header;
