import React from "react";
import Card from "../../global-components/Card";
import { CardTypesData, FetchData } from "../../global-types/apiCallTypes";

//This component displays all products in the same category except the item that has been currently displayed
interface RecoomendationProps {
  category: string;
  title: string;
}

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

const Recommendation = async ({ category, title }: RecoomendationProps) => {
  const data: CardTypesData[] | null = await getDummyDataRecommended(category);
  return (
    <div className="w-full flex overflow-x-scroll mt-6 gap-10 xl:gap-20  ">
      {data?.map((item: CardTypesData) =>
        item.title !== title ? (
          <Card
            id={item.id}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
            category={item.category}
          />
        ) : null
      )}
    </div>
  );
};

export default Recommendation;
