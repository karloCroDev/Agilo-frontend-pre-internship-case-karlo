"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { GrPrevious } from "react-icons/gr";
import { logicContextChecker } from "@/app/contexes/Logic";

const inter = Inter({ subsets: ["latin"] });

type ProductImagesProps = {
  images: string[];
  price: number;
  category: string;
};
const ProductImages = ({ images, price, category }: ProductImagesProps) => {
  const { quantity } = logicContextChecker();
  const [value, setValue] = useState<string>("red");
  const [indexIMG, setIndexIMG] = useState<number>(1);
  useEffect(() => {
    if (indexIMG > images.length - 1) setIndexIMG(0);
    if (indexIMG < 0) setIndexIMG(images.length - 1);
  }, [indexIMG]);
  return (
    <div className="flex-1 flex flex-col w-full gap-3 ">
      <div className="relative">
        <img
          src={images[indexIMG]}
          className="w-full aspect-[4/3] bg-black rounded-3xl object-contain"
        />
        {images.length !== 1 ? (
          <div className="bg-black absolute right-4 bottom-4 bg-blue flex items-center border p-2 rounded-xl ">
            <GrPrevious
              className="size-10 cursor-pointer border-r hover:brightness-75"
              onClick={() => setIndexIMG(indexIMG - 1)}
            />
            <GrPrevious
              className="rotate-180 size-10 cursor-pointer hover:brightness-75"
              onClick={() => setIndexIMG(indexIMG + 1)}
            />
          </div>
        ) : null}
      </div>
      <div className="px-2 flex justify-between">
        <h1 className="text-5xl font-semibold">
          <span className={`${inter.className} text-4xl `}>Price:</span>
          {price * quantity}€
        </h1>
        {category?.includes("mens") || category?.includes("womens") ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default ProductImages;
