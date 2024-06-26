"use client";
import React, { useEffect, useMemo, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Inter } from "next/font/google";
import { logicContextChecker } from "../../contexes/Logic";
import { MdKeyboardArrowDown } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

type ProductDetailsProps = {
  title: string;
  brand: string;
  description: string;
};

const ProductDetails = ({ title, brand, description }: ProductDetailsProps) => {
  const { toastFn, setQuantity } = logicContextChecker();
  const [numberOfItems, setNumberOfItems] = useState<number[]>([]);
  useEffect(() => {
    let tempArray: number[] = [];
    const randomNum = Math.round(Math.random() * 10) + 1; // Adjusted to get a number between 0 and 10
    for (let i = 1; i <= randomNum; i++) {
      tempArray.push(i);
    }
    setNumberOfItems(tempArray);
  }, []);
  return (
    <div className="flex-1 flex flex-col gap-5 p-5">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <h3 className="text-3xl font-bold">
        <span className={`${inter.className} font-semibold text-2xl`}>
          Brand:{" "}
        </span>
        {!brand ? "Unknown" : brand}
      </h3>
      <p className="text-[20px] font-semibold">
        <span className={`${inter.className}`}>Description: </span>
        {description}
      </p>
      <div className="relative mt-auto ">
        <select
          className={`${inter.className} w-full self-center h-[65px] bg-secondary text-2xl pl-5 font-semibold rounded-md hover:brightness-[80%] cursor-pointer appearance-none focus:outline-none`}
          onChange={(e) => setQuantity(+e.target.value)}
        >
          {/* I haven't found any fixed value from an api for value */}
          {numberOfItems.map((x: number) => (
            <option value={x}>Quantity: {x}</option>
          ))}
        </select>
        <MdKeyboardArrowDown className="absolute right-4 top-[14px] size-10" />
      </div>
      <button
        className={`self-center w-full font-semibold text-text  bg-buttons text-2xl h-[65px] ${inter.className} rounded-md flex justify-between items-center px-5 hover:brightness-[80%] transition-all active:scale-[98%]`}
        onClick={() =>
          toastFn("error", "This feature soon will be implemented")
        }
      >
        Add to cart
        <BsCart2 className="size-9" />
      </button>
    </div>
  );
};

export default ProductDetails;
