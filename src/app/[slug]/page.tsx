import React from "react";
import {
  FetchProductData,
  Slug,
} from "../(home)/home-components/apiCallsTypes";
import { SectionTitles } from "../customs/exports";
import {
  ProductDetails,
  ProductImages,
  Recommendation,
} from "./slug-components/exports";
const getDummyDataSpecifiedProduct = async (idOfItem: number) => {
  //Instead of using useParams, I can do this I think it's more readable
  try {
    const call = await fetch(
      `https://dummyjson.com/products/${idOfItem}?select=title,brand,price,description,images,category`
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
  );

  return (
    <div className="ml-auto mr-auto flex items-center flex-col gap-10 w-[1600px] pb-20">
      <section className="w-full flex justify-center gap-20  mt-[150px] ">
        <ProductImages
          images={data.images}
          price={data.price}
          category={data.category}
        />
        <ProductDetails
          title={data.title}
          brand={data.brand}
          description={data.description}
        />
      </section>
      <hr className="border-secondary border-t-2 w-full" />

      <div className="self-start w-full">
        <div>
          <SectionTitles>You might also like </SectionTitles>
          <span className="text-xl text-buttons">
            (Press shift + scroll to horizontal scroll)
          </span>
        </div>

        <Recommendation category={data.category} title={data.title} />
      </div>
    </div>
  );
};

export default page;
