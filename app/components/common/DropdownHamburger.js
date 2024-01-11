import React, { useState } from "react";
import MenuBar from "../menuBar/MenuBar";
import Actions from "../actions/Actions";
import ThemeToggle from "./ThemeToggle";

const DropdownHamburger = ({toggleMode, theme}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <p onClick={toggleDropdown} className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
          fill={`
          ${theme == "dark" ? "#ffffff" : "#000000"}`}
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      </p>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-md w-64 flex flex-col space-y-2 items-center">
          {/* Dropdown content goes here */}
          {/* <ul
            className={`
          ${
            theme == "dark" ? "bg-slate-900" : "bg-slate-200"
          } border cursor-pointer rounded shadow-md p-2`}
          >
            {options.map((item, index) => (
              <Link href={item.link} key={index}>
                <li className="px-4 py-2  hover:bg-slate-400  rounded">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul> */}
          <MenuBar />
          <Actions />
          <ThemeToggle toggleMode={toggleMode} theme={theme}/>
        </div>
      )}
    </div>
  );
};

export default DropdownHamburger;
