import React from "react";
import { FaSearch } from "react-icons/fa";

const Filters = () => {
  return (
    <section className="flex justify-between">
      <div className="w-full relative items-center">
        <input
          type="text"
          placeholder="Search for wanted item..."
          className="bg-secondary rounded-full h-12 w-70 placeholder:text-text ps-10 focus:outline-none"
        />
        <FaSearch className="absolute text-text text-lg top-4 left-3.5" />
      </div>

      <select id="category">
        <option value="e">A</option>
        <option value="d">B</option>
        <option value="a">C</option>
        <option value="b">D</option>
        <option value="c">E</option>
      </select>
    </section>
  );
};

export default Filters;
