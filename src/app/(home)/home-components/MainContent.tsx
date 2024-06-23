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
  // const beauty=data?.filter(item=>item.category==='beauty')
  // const fragrances=data?.filter(item=>item.category==='fragrances')
  // const furniture=data?.filter(item=>item.category==='furniture')
  // const groceries=data?.filter(item=>item.category==='groceries')
  // const homeDecoration=data?.filter(item=>item.category==='home-decoration')
  // const kitchenAccessories=data?.filter(item=>item.category==='kitchen-accessories')
  // const laptops=data?.filter(item=>item.category==='laptops')
  // const mensShirts=data?.filter(item=>item.category==='mens-shirts')
  // const mensShoes=data?.filter(item=>item.category==='mens-shoes')
  // const mensWatches=data?.filter(item=>item.category==='mens-watches')

  const categories: any = Array.from(
    new Set(data?.map((item) => item.category))
  );
  let sectionItems: [][] = [];
  let temporaryStorage: any = [];
  let check = "";

  //Universal algorithm to sort items
  if (data !== null) {
    //boring ts 😑
    for (let i = 0; i < data.length; i++) {
      if (data[i].category != check) {
        sectionItems.push(temporaryStorage);
        temporaryStorage = [];
      }
      temporaryStorage.push(data[i]);
      check = data[i].category!;
    }
  }

  {
    /* <Card
    id={item.id}
    title={item.title}
    thumbnail={item.thumbnail}
    price={item.price}
    key={item.id}
  /> */
  }
  return (
    <>
      {sectionItems.map((items: [], i: number) => {
        return (
          <>
            <SectionTitles>
              {i < 1
                ? null
                : categories[i - 1][0]?.toUpperCase() +
                  categories[i - 1]?.substring(1)}
            </SectionTitles>

            <div className="grid grid-cols-3 gap-y-10 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 place-items-center">
              {items.map((item: CardTypesData) => (
                <Card
                  id={item.id}
                  title={item.title}
                  thumbnail={item.thumbnail}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </div>
          </>
        );
      })}
    </>
  );
};

export default MainContent;
