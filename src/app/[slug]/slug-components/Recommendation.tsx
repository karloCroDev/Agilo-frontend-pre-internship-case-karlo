import React from "react";
import Card from "../../(home)/home-components/Card";
import {
  CardTypesData,
  FetchData,
  FetchProductData,
} from "@/app/(home)/home-components/apiCallsTypes"; //move to global
const getDummyDataRecommended = async (
  category: string
): Promise<FetchData> => {
  try {
    const call = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const data = await call.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Recommendation = async ({ category }: { category: string }) => {
  const data: CardTypesData[] | null = await getDummyDataRecommended(category);
  return (
    <div className="w-full flex overflow-x-scroll gap-20 mt-6">
      {data?.map((item: CardTypesData) => (
        <Card
          id={item.id}
          title={item.title}
          price={item.price}
          thumbnail={item.thumbnail}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Recommendation;
