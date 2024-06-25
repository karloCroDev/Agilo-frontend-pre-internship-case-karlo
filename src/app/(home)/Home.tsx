import React from "react";
import { Card, Filters, MainContent } from "./home-components/exports";
import { FetchData, CardTypesData } from "./home-components/apiCallsTypes";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//Utilizing ssr, for better perofrmanse
const getDummyDataGrid = async (): Promise<FetchData> => {
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
      <div className="w-[1600px]  flex flex-col gap-6 mt-[150px] ">
        {/* Chnage the width do not make it 3/4 (temporary solution) */}
        <Filters />
        <MainContent data={data} />
      </div>
    </div>
  );
};

export default Home;
