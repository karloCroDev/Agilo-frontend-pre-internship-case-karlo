import React from "react";
import { Filters, MainContent } from "./home-components/exports";
import { FetchData } from "../global-types/apiCallTypes";
import { inter } from "../fonts";

const getDummyDataGrid = async (): Promise<FetchData> => {
  // You can check on more or less products, "limit=0" is to display all products
  try {
    const call = await fetch(
      "https://dummyjson.com/products?limit=98&select=id,title,thumbnail,price,category"
    );

    const data = await call.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const Home = async () => {
  const data = await getDummyDataGrid();

  return (
    <div className={`${inter.className} grid place-items-center pb-20`}>
      <div className="w-10/12  mt-[100px] flex flex-col gap-4  xl:gap-6 xl:mt-[150px] xl-[1000px] 2xl:w-[1500px]  lg:w-9/12 ">
        <Filters />
        <MainContent data={data} />
      </div>
    </div>
  );
};

export default Home;
