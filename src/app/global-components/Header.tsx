import React from "react";
import { RxHamburgerMenu } from "react-icons/rx"; //React icons used for icons

const Header = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between px-20 h-32 w-full border-b-2 border-secondary">
        <li>
          <h1 className={`text-5xl font-bold`}>GoofyGoods</h1>
        </li>
        <li>
          <RxHamburgerMenu className="text-5xl cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
