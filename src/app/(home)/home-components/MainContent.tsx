import React from "react";
import Card from "./Card";
import { DefaultMargin, SectionTitles } from "../../customs/exports";
import { FetchData, CardTypesData } from "./apiCallsTypes";

///////////////////////////////////////////////////
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
///////////////////////////////////////////////////

///////////////////////////////////////////////////

const MainContent = async () => {
  const data = await getDummyDataGrid();

  ///
  let checker: string = "";
  return (
    <>
      <div className="grid grid-cols-3 gap-y-10 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
        {data?.map((item: CardTypesData) => {
          let state = item.category != checker; // Essentially checks the category (I think this is the easiest and most sophisticated approach)
          checker = item.category!;
          return (
            <>
              {/* <SectionTitles>
                {state
                  ? item.category![0].toUpperCase() +
                    item.category!.substring(1)
                  : ""}
              </SectionTitles> */}
              <Card
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                price={item.price}
                key={item.id}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MainContent;
