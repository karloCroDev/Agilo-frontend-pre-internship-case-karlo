import React from "react";
import { Caveat } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
const caveat = Caveat({ subsets: ["latin"] });
const Card = () => {
  return (
    <>
      <div className="group aspect-[3/4] h-[30rem] bg-secondary rounded-3xl drop-shadow-lg flex flex-col">
        <div className="flex-1 w-full pl-4 flex align items-center">
          <h2 className={`${caveat.className} text-4xl font-semibold`}>
            Men's jacket
          </h2>
        </div>
        <div className="flex-[4] w-full bg-black"></div> {/* Image here */}
        <div className="flex-1 w-full px-4 flex flex-row items-center justify-between hover:">
          <h2 className="text-2xl font-semibold">
            Price:
            <span className={`${caveat.className} text-3xl font-semibold`}>
              500$
            </span>
          </h2>
          <FaArrowRightLong className="text-4xl text-buttons group-hover:translate-x-2 transition-all" />
        </div>
      </div>
    </>
  );
};

export default Card;
