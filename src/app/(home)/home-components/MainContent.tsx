"use client";
import React from "react";
import Card from "./Card";
import { DefaultMargin, SectionTitles } from "../../customs/exports";
import { CardTypesData } from "./apiCallsTypes";
import { logicContextChecker } from "../../contexes/Logic";
//////////////////////////Explain that this is the part that I avoided, where I am most proud of
// const data = await getDummyDataGrid();
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

///////////////////////////////////////////////////

const MainContent = ({ data }: { data: CardTypesData[] | null }) => {
  const { search } = logicContextChecker();

  ///////////////////////////////////////
  const categories: any = Array.from(
    new Set(data?.map((item) => item.category))
  );
  let sectionItems: [][] = [];
  let temporaryStorage: any = [];
  let check = "";

  //Universal algorithm to sort items through their original category
  if (data !== null) {
    //boring ts 😑
    //rewrite this in forEach loop (for loop here is a but ugly)
    for (let i = 0; i < data.length; i++) {
      if (data[i].category != check) {
        sectionItems.push(temporaryStorage);
        temporaryStorage = [];
      }
      temporaryStorage.push(data[i]);
      check = data[i].category!;
    }
  }
  return (
    <>
      {sectionItems.map((items: [], i: number) => {
        return (
          <>
            <SectionTitles key={i}>
              {i < 1
                ? null
                : categories[i - 1][0]?.toUpperCase() +
                  categories[i - 1]?.substring(1)}
            </SectionTitles>

            <div className="grid grid-cols-3 gap-y-10 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 place-items-center">
              {items.map((item: CardTypesData) => {
                if (item.title.includes(search)) {
                  return (
                    <Card
                      id={item.id}
                      title={item.title}
                      thumbnail={item.thumbnail}
                      price={item.price}
                      key={item.id}
                    />
                  );
                }
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default MainContent;
