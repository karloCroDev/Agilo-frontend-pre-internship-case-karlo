import React from "react";
import { Slug } from "../(home)/home-components/apiCallsTypes";
import { SectionTitles } from "../customs/exports";
import {
  ProductDetails,
  ProductImages,
  Recommendation,
} from "./slug-components/exports";
const getDummyDataSpecifiedProduct = async (idOfItem: number) => {
  //Instead of using useParams, I can do this I think it's more readable

  const call = await fetch(
    `https://dummyjson.com/products/${idOfItem}?select=title,brand,price,description,images,category`
  );
  const data = await call.json();
  return data;
};

const page = async (id: Slug) => {
  // const data = await getDummyDataSpecifiedProduct(id.params.slug);
  // console.log(data);
  return (
    <div className=" flex justify-center items-center flex-col">
      <section className=" flex justify-center gap-10 items-center w-[1600px]  border-white border-2 mt-[150px]">
        <ProductImages images={["ss"]} price={9} />
        <ProductDetails title={"s"} brand={"s"} description={"s"} />
      </section>
      <SectionTitles>You might also like</SectionTitles>
      <Recommendation category="hjgj" />
    </div>
  );
};

export default page;
