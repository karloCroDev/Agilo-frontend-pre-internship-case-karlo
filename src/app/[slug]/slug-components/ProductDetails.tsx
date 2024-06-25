"use client";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Inter } from "next/font/google";
import { logicContextChecker } from "../../contexes/Logic";

const inter = Inter({ subsets: ["latin"] });

type ProductDetailsProps = {
  title: string;
  brand: string;
  description: string;
};

const ProductDetails = ({ title, brand, description }: ProductDetailsProps) => {
  const { toastFn } = logicContextChecker();
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
      <select
        className={`${inter.className} w-full self-center h-[65px] bg-secondary text-2xl px-10 font-semibold rounded-md hover:brightness-[80%] cursor-pointer mt-auto`}
      >
        <option value="1">Quantity (1)</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button
        className={`self-center w-full font-semibold text-text  bg-buttons text-2xl h-[65px] ${inter.className} rounded-md flex justify-between items-center px-10 hover:brightness-[80%] transition-all `}
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
