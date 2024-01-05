// components/DropdownButton.js

import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const DropdownButton = ({ title, options = [] }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <p onClick={toggleDropdown} className="flex items-center">
        {title}
        {isDropdownOpen ? (
          <MdOutlineKeyboardArrowUp className="ml-2" />
        ) : (
          <MdOutlineKeyboardArrowDown className="ml-2" />
        )}
      </p>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2">
          {/* Dropdown content goes here */}
          {options.length > 0 ? (
            <ul className="bg-blue-500 border border-gray-300 rounded shadow-md">
              {options.map((item, index) => (
                <li className="px-4 py-2" key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="bg-blue-500 border border-gray-300 rounded shadow-md">
              <li className="px-4 py-2">Option 1</li>
              <li className="px-4 py-2">Option 2</li>
              <li className="px-4 py-2">Option 3</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
