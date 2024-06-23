"use client";
import React from "react";

import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md"; //try to implement it if possible
import { DefaultMargin, SectionTitles } from "../../customs/exports";

const Filters = () => {
  return (
    <>
      <SectionTitles>Additional filters</SectionTitles>
      <DefaultMargin>
        <div className="flex justify-between">
          <div className="w-full relative items-center">
            <input
              type="text"
              placeholder="Search for wanted item..."
              className="bg-secondary rounded-full h-12 w-70 placeholder:text-text ps-10 focus:outline-none"
            />
            <FaSearch className="absolute text-text text-lg top-4 left-3.5" />
          </div>

          <select
            id="category"
            className="bg-buttons h-12 rounded-md text-text flex justify-between w-52 focus:outline-none"
          >
            <option>
              Category
              {/* <h3 className="text-text text-xl">Category</h3> */}
            </option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </div>
      </DefaultMargin>
    </>
  );
};

export default Filters;
