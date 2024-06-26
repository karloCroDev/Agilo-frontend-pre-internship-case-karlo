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
    <div className="flex-1 flex flex-col-reverse justify-center w-full gap-3 xl:flex-col ">
      <div className="relative">
        <img
          src={images[indexIMG]}
          className="w-full aspect-16/9 sm:aspect-[5/3] xl:aspect-[4/3] bg-black rounded-3xl object-contain "
        />
        {images.length !== 1 ? (
          <div className="bg-black absolute right-4 bottom-4 bg-blue flex items-center border p-2 rounded-xl ">
            <GrPrevious
              className="size-8 cursor-pointer border-r active:scale-90 sm:size-10"
              onClick={() => setIndexIMG(indexIMG - 1)}
            />
            <GrPrevious
              className="rotate-180 size-8 cursor-pointer active:scale-90  sm:size-10"
              onClick={() => setIndexIMG(indexIMG + 1)}
            />
          </div>
        ) : null}
      </div>
      <div className="px-2 flex flex-col gap-2 xl:gap-6 xl:justify-between xl:flex-row">
        <h1 className="text-4xl font-semibold  2xl:text-5xl">
          <span
            className={`${inter.className} text-2xl xl:text-3xl 2xl:text-4xl `}
          >
            Price:
          </span>
          {(price * quantity).toFixed(2)}€
        </h1>
        {category?.includes("mens") || category?.includes("womens") ? (
          <div className="flex items-center xl:justify-center gap-2 sm:gap-3 2xl:gap-6">
            <label className="flex items-center gap-2 text-xl sm:text-2xl font-semibold cursor-pointer 2xl:gap-3 2xl:text-3xl">
              Red
              <input
                type="radio"
                name="colors"
                className="hidden peer"
                checked={value === "red"}
                onChange={() => setValue("red")}
              />
              <span className="2xl:size-6 size-4 bg-black rounded-full peer-checked:bg-red-500 transition-all hover:bg-secondary"></span>
            </label>
            <label className="flex items-center gap-2 text-xl sm:text-2xl font-semibold cursor-pointer 2xl:gap-3 2xl:text-3xl">
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
            <label className="flex items-center gap-2 text-xl sm:text-2xl font-semibold cursor-pointer 2xl:gap-3 2xl:text-3xl">
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
