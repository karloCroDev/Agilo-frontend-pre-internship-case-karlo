"use client";
import React from "react";
import { logicContextChecker } from "../contexes/Logic";
import { RxHamburgerMenu } from "react-icons/rx"; //React icons used for icons
import Link from "next/link";

const Header = () => {
  const { toastFn } = logicContextChecker();
  return (
    <nav>
      <ul className="flex items-center justify-between h-20  w-full border-b-2 px-5 border-secondary fixed z-10 bg-primary xl:px-20 md:px-15  md:px-10  xl:h-32 ">
        <li>
          <Link href="/">
            <h1 className={`text-4xl font-bold xl:text-5xl`}>GoofyGoods</h1>
          </Link>
        </li>
        <li
          onClick={() =>
            toastFn("error", "This feature will be implemented soon!")
          }
        >
          <RxHamburgerMenu className=" text-4xl cursor-pointer xl:text-5xl " />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
