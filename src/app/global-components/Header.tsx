"use client";
import React from "react";
import { logicContextChecker } from "../contexes/Logic";
import { RxHamburgerMenu } from "react-icons/rx"; //React icons used for icons
import Link from "next/link";

const Header = () => {
  const { toastFn } = logicContextChecker();
  return (
    <nav>
      <ul className="flex items-center justify-between px-20 h-32 w-full border-b-2 border-secondary fixed z-10 bg-primary">
        <li>
          <Link href="/">
            <h1 className={`text-5xl font-bold`}>GoofyGoods</h1>
          </Link>
        </li>
        <li
          onClick={() =>
            toastFn("error", "This feature will be implemented soon!")
          }
        >
          <RxHamburgerMenu className="text-5xl cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
