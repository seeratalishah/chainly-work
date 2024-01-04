"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const MenuBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('home');

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleLinkClick = (linkKey) => {
    setActiveLink(linkKey);
    setActiveDropdown(null); // Close the dropdown when a link is clicked
  };

  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdown1Ref.current &&
        !dropdown1Ref.current.contains(event.target) &&
        activeDropdown === 'dropdown1'
      ) {
        setActiveDropdown(null);
      }

      if (
        dropdown2Ref.current &&
        !dropdown2Ref.current.contains(event.target) &&
        activeDropdown === 'dropdown2'
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Home Link */}
        <Link href="/" passHref>
          <span className={`text-white text-xl font-bold cursor-pointer ${activeLink === 'home' ? 'active' : ''}`}>Logo</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          {/* First Link (Active by Default) */}
          <Link href="/page1" passHref>
            <span
              onClick={() => handleLinkClick('home')}
              className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'home' ? 'active' : ''}`}
            >
              Link 1
            </span>
          </Link>

          {/* Second Link */}
          <Link href="/page2" passHref>
            <span
              onClick={() => handleLinkClick('jobs')}
              className={`text-white hover:text-gray-300 cursor-pointer ${activeLink === 'jobs' ? 'active' : ''}`}
            >
              Link 2
            </span>
          </Link>

          {/* Dropdown 1 */}
          <div ref={dropdown1Ref} className="relative inline-block text-left">
            <button onClick={() => toggleDropdown('dropdown1')} className="text-white hover:text-gray-300 focus:outline-none">
              Dropdown 1 {activeDropdown === 'dropdown1' ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <div className={`absolute z-50 bg-gray-800 text-white py-2 space-y-2 right-0 ${activeDropdown === 'dropdown1' ? 'block' : 'hidden'}`}>
              <Link href="/dropdown1-item1" passHref>
                <span
                  onClick={() => handleLinkClick('dropdown1-item1')}
                  className={`block px-4 py-2 hover:text-gray-300 cursor-pointer ${activeLink === 'dropdown1-item1' ? 'active' : ''}`}
                >
                  Dropdown Item 1
                </span>
              </Link>
              <Link href="/dropdown1-item2" passHref>
                <span
                  onClick={() => handleLinkClick('dropdown1-item2')}
                  className={`block px-4 py-2 hover:text-gray-300 cursor-pointer ${activeLink === 'dropdown1-item2' ? 'active' : ''}`}
                >
                  Dropdown Item 2
                </span>
              </Link>
            </div>
          </div>

          {/* Dropdown 2 */}
          <div ref={dropdown2Ref} className="relative inline-block text-left">
            <button onClick={() => toggleDropdown('dropdown2')} className="text-white hover:text-gray-300 focus:outline-none">
              Dropdown 2 {activeDropdown === 'dropdown2' ? <FaArrowUp /> : <FaArrowDown />}
            </button>
            <div className={`absolute z-50 bg-gray-800 text-white py-2 space-y-2 right-0 ${activeDropdown === 'dropdown2' ? 'block' : 'hidden'}`}>
              <Link href="/dropdown2-item1" passHref>
                <span
                  onClick={() => handleLinkClick('dropdown2-item1')}
                  className={`block px-4 py-2 hover:text-gray-300 cursor-pointer ${activeLink === 'dropdown2-item1' ? 'active' : ''}`}
                >
                  Dropdown Item 1
                </span>
              </Link>
              <Link href="/dropdown2-item2" passHref>
                <span
                  onClick={() => handleLinkClick('dropdown2-item2')}
                  className={`block px-4 py-2 hover:text-gray-300 cursor-pointer ${activeLink === 'dropdown2-item2' ? 'active' : ''}`}
                >
                  Dropdown Item 2
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;


