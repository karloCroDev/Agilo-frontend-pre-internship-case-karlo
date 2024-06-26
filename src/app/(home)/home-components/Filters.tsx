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
              placeholder="Search..."
              className="bg-secondary rounded-full w-32 h-10 placeholder:text-text pl-9 placeholder:text-md focus:outline-none md:w-64 md:h-12 "
            />
            <FaSearch className="absolute text-text text-md left-3 top-3.5 xl:top-4 sm:text-lg" />
          </div>
          <div className="relative">
            <select
              className=" h-10 text-sm  bg-buttons rounded-md text-text flex justify-between font-semibold px-2 remove-arrow cursor-pointer appearance-none focus:outline-none pl-2 md:h-12 md:w-52 xl:text-xl"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">All items</option>

              {categoriesG.map((item: string) => (
                <option value={item}>
                  {item[0]?.toUpperCase() + item?.substring(1)}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown className="absolute right-0 top-[7px] size-7  md:top-[10px]  " />
          </div>
        </div>
      </DefaultMargin>
    </>
  );
};

export default Filters;
