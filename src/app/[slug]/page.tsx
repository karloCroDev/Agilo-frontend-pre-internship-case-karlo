import React from "react";
import { FetchProductData, Slug } from "../global-types/apiCallTypes";
import { SectionTitles } from "../customs/exports";
import {
  ProductDetails,
  ProductImages,
  Recommendation,
} from "./slug-components/exports";

const getDummyDataSpecifiedProduct = async (idOfItem: number) => {
  try {
    const call = await fetch(
      `https://dummyjson.com/products/${idOfItem}?select=id,title,brand,price,description,images,category`
    );
    const data = await call.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const page = async (id: Slug) => {
  const data: FetchProductData = await getDummyDataSpecifiedProduct(
    id.params.slug
    //Instead of using useParams, I can do this I think it's more readable and easier
  );

  return (
    <div className="w-10/12 ml-auto mr-auto flex items-center flex-col gap-10 pb-20 xl-[1000px] 2xl:w-[1500px]  lg:w-9/12 ">
      <section className="w-full flex flex-col-reverse gap-2  mt-[100px] xl:gap-10 2xl:gap-10 xl:mt-[150px] xl:justify-center xl:flex-row">
        <ProductImages
          images={data?.images}
          price={data?.price}
          category={data?.category}
        />
        <ProductDetails
          title={data?.title}
          brand={data?.brand}
          description={data?.description}
          key={data?.id}
        />
      </section>
      <hr className="border-secondary border-t-2 w-full" />

      <div className="self-start w-full">
        <div>
          <SectionTitles>You might also like </SectionTitles>
          <span className="text-xl sm:text-buttons hidden sm:block">
            (Hold shift + scroll to see other items)
          </span>
          <span className="text-buttons sm:hidden ">
            (Scroll to see more items)
          </span>
        </div>

        <Recommendation category={data.category} title={data.title} />
      </div>
    </div>
  );
};

export default page;
