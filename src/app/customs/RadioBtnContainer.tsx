//Because of tailwind css I can't reuse some classes, so I decided to create component for Radio button containers because they will all share same functunalities
//Also I think this is cleaner than storing styles inside the varaibles
"use client";
import React from "react";
import { logicContextChecker } from "@/app/contexes/Logic";

type CheckColor = "Red" | "Green" | "Blue";

const RadioBtnContainer = ({ passColor }: { passColor: CheckColor }) => {
  const { setColor, color } = logicContextChecker();

  return (
    <label className="flex items-center gap-2 text-xl sm:text-2xl font-semibold cursor-pointer 2xl:gap-3 2xl:text-3xl">
      {passColor}
      <input
        type="radio"
        name="colors"
        className="hidden peer"
        checked={color === passColor}
        onChange={() => setColor(passColor)}
      />
      {/* This is very ugly but I've read that tailwind css can't interpret dynamic classes, I have to do it like this see (under export default how I made it if tailwind supports in future dynamic classes) */}
      <span
        className={`2xl:size-6 size-4 bg-black rounded-full transition-all hover:bg-secondary 
          ${color === "Red" ? "peer-checked:bg-red-500" : ""}
          ${color === "Green" ? "peer-checked:bg-green-500" : ""}
          ${color === "Blue" ? "peer-checked:bg-blue-500" : ""}
        `}
      ></span>
    </label>
  );
};

export default RadioBtnContainer;

// <span
//   className={2xl:size-6 size-4 bg-black rounded-full peer-checked:bg-${color.toLowerCase()}-500 transition-all hover:bg-secondary}
// ></span>
