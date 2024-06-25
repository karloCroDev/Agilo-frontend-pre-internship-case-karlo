"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import { DefaultMargin, SectionTitles } from "../../customs/exports";
import { logicContextChecker } from "../../contexes/Logic";
const Filters = () => {
  const { setSearch, categoriesG, setSort } = logicContextChecker();

  return (
    <>
      <SectionTitles>Additional filters</SectionTitles>
      <DefaultMargin>
        <div className="flex justify-between">
          <div className="w-full relative items-center">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for wanted item..."
              className="bg-secondary rounded-full h-12 w-70 placeholder:text-text ps-10 focus:outline-none"
            />
            <FaSearch className="absolute text-text text-lg top-4 left-3.5" />
          </div>
          <div className="relative">
            <select
              className="bg-buttons h-12 rounded-md text-text flex justify-between w-52 text-lg font-semibold px-1 remove-arrow cursor-pointer appearance-none focus:outline-none pl-2"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">
                All items
                {/* <h3 className="text-text text-xl">Category</h3> */}
              </option>

              {categoriesG.map((item: string) => (
                <option value={item}>
                  {item[0]?.toUpperCase() + item?.substring(1)}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown className="absolute right-2 top-[10px] size-7" />
          </div>
        </div>
      </DefaultMargin>
    </>
  );
};

export default Filters;
