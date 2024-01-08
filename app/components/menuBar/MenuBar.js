"use client";
import React from "react";
import Link from "next/link";
import DropdownButton from "../common/DropdownButton";

const MenuBar = () => {
  return (
    <ul className="flex lg:flex-row flex-col space-y-2 lg:space-y-0 items-center space-x-6 dark:text-gray-200 border-black  font-light">
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
  );
};

export default MenuBar;
