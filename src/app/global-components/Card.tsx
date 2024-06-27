import React from "react";
import Link from "next/link";
import { inter, caveat } from "../fonts";
import { FaArrowRightLong } from "react-icons/fa6";
import { CardTypesData } from "../global-types/apiCallTypes";

const Card = ({ id, title, thumbnail, price }: CardTypesData) => {
  const titleArray: string[] = title.split(" ");
  const titleCheck =
    titleArray.length > 3
      ? titleArray
          .map((l: string, i: number) => (i == 3 ? "..." : i > 3 ? "" : l))
          .join(" ")
      : title;

  return (
    <>
      <Link href={id.toString()}>
        <div className="group aspect-[3/4]  h-[24rem]  bg-secondary rounded-3xl drop-shadow-lg flex flex-col cursor-pointer hover:scale-[0.98] transition-all 2xl:h-[30rem]">
          <div className="flex-1 w-full pl-4 flex align items-center">
            <h2
              className={`${caveat.className} text-2xl font-semibold group-hover:text-buttons transition-all 2xl:text-4xl xl:text-[28px]`}
            >
              {titleCheck}
            </h2>
          </div>
          <div className="flex-[4]  bg-black flex items-center justify-center overflow-hidden">
            <img
              loading="lazy"
              src={thumbnail}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 w-full px-4 flex flex-row items-center justify-between">
            <h2
              className={`${inter.className} text-xl font-semibold group-hover:text-buttons transition-all xl:text-2xl`}
            >
              Price:
              <span
                className={`${caveat.className} text-2xl font-semibold xl:text-3xl`}
              >
                {price}€
              </span>
            </h2>
            <FaArrowRightLong className="text-4xl text-buttons group-hover:translate-x-2 transition-all" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
