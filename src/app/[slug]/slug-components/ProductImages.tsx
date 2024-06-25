"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

type ProductImagesProps = {
  images: string[];
  price: number;
};
const ProductImages = ({ images, price }: ProductImagesProps) => {
  const [value, setValue] = useState<string>("red");
  console.log(value);
  return (
    <div className="flex-1 flex flex-col w-full gap-3 ">
      <div className="w-full aspect-[4/3] bg-black rounded-3xl"></div>
      <div className="px-2 flex justify-between">
        <h1 className="text-5xl font-semibold">
          <span className={`${inter.className} text-4xl `}>Price:</span>
          {price}€
        </h1>
        <div className="flex items-center justify-center gap-6">
          <label className="flex items-center gap-3 text-3xl font-semibold cursor-pointer">
            Red
            <input
              type="radio"
              name="colors"
              className="hidden peer"
              checked={value === "red"}
              onChange={() => setValue("red")}
            />
            <span className="size-6 bg-black rounded-full peer-checked:bg-red-500 transition-all hover:bg-secondary"></span>
          </label>
          <label className="flex items-center gap-3 text-3xl font-semibold cursor-pointer">
            Green
            <input
              type="radio"
              name="colors"
              className="hidden peer"
              checked={value === "green"}
              onChange={() => setValue("green")}
            />
            <span className="size-6 bg-black rounded-full peer-checked:bg-green-500 transition-all hover:bg-secondary"></span>
          </label>
          <label className="flex items-center gap-3 text-3xl font-semibold cursor-pointer">
            Blue
            <input
              type="radio"
              name="colors"
              className="hidden peer"
              checked={value === "blue"}
              onChange={() => setValue("blue")}
            />
            <span className="size-6 bg-black rounded-full peer-checked:bg-blue-500 transition-all hover:bg-secondary"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
