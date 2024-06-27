"use client";
import React, { useEffect, useState } from "react";
import { inter } from "../../fonts";
import { GrPrevious } from "react-icons/gr";
import { logicContextChecker } from "@/app/contexes/Logic";
import { RadioBtnContainer } from "../../customs/exports";

interface ProductImagesProps {
  images: string[];
  price: number;
  category: string;
}

const ProductImages = ({ images, price, category }: ProductImagesProps) => {
  const { quantity } = logicContextChecker();
  const [indexIMG, setIndexIMG] = useState<number>(0);
  useEffect(() => {
    if (indexIMG > images.length - 1) setIndexIMG(0);
    if (indexIMG < 0) setIndexIMG(images.length - 1);
  }, [indexIMG]);
  //if you see images?.length>0, I was getting an error in the console so this is how I fixed it
  return (
    <div className="flex-1 flex flex-col-reverse justify-center w-full gap-3 xl:flex-col ">
      <div className="relative">
        <img
          src={images?.length > 0 ? images[indexIMG] : ""} //Have to check if it's an array
          className="w-full aspect-16/9 bg-black rounded-3xl object-contain sm:aspect-[5/3] xl:aspect-[4/3]"
        />
        {images?.length > 0 && images.length !== 1 ? (
          <div className="bg-black absolute right-4 bottom-4 bg-blue flex items-center border p-2 rounded-xl ">
            <GrPrevious
              className="size-8 cursor-pointer border-r active:scale-90 sm:size-10"
              onClick={() => setIndexIMG(indexIMG - 1)}
            />
            <GrPrevious
              className="rotate-180 size-8 cursor-pointer active:scale-90 sm:size-10"
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
          <div className="flex items-center gap-2 sm:gap-3 xl:justify-center 2xl:gap-6">
            <RadioBtnContainer passColor="Red" />
            <RadioBtnContainer passColor="Blue" />
            <RadioBtnContainer passColor="Green" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductImages;
