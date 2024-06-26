"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../../global-components/exports";
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

///It seems I wrote this code half-drunk. Fix this!!!!!
const MainContent = ({ data }: { data: CardTypesData[] | null }) => {
  const { search, setCategoriesG, categoriesG, sort, setSearch, setSort } =
    logicContextChecker();

  ///////////////////////////////////////

  const [sectionItems, setSectionItems] = useState<[][]>([]);
  useEffect(() => {
    // Just when user uses title when rerouting, data in these two remains even though it shouldn't. So this just rests them
    setSearch("");
    setSort("");
    const categories: any = Array.from(
      new Set(data?.map((item) => item.category))
    );
    /////////////
    let sectionItems: [][] = [];
    let temporaryStorage: any = [];
    let check = "";

    setCategoriesG(categories);
    //Universal algorithm to sort items through their original category
    if (data !== null) {
      //boring ts 😑
      //rewrite this in forEach loop (for loop here is a but ugly)
      data.forEach((item: CardTypesData) => {
        if (item.category != check || item.id === data.length) {
          sectionItems.push(temporaryStorage);
          temporaryStorage = [];
        }
        temporaryStorage.push(item);
        check = item.category!;
      });
    }
    setSectionItems(sectionItems);
  }, []);
  ////

  return (
    <>
      {sectionItems.map((items: [], i: number) => {
        const filteredItems = items.filter(
          (item: CardTypesData) =>
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            item.category?.includes(sort)
        );
        return (
          <>
            {filteredItems.length > 0 ? ( //Reason I wraped all is because when I don't wrap the div container it takes up the space on the screen (even though it displays nothing) so it doesn't look very nice. when I wrap all it acctually fixes the problem
              <>
                <SectionTitles key={i}>
                  {i < 1
                    ? ""
                    : categoriesG[i - 1][0]?.toUpperCase() +
                      categoriesG[i - 1]?.substring(1)}
                </SectionTitles>

                <div className="grid gap-y-10 grid-cols-1 place-items-center xl:gap-y-16 xl:grid-cols-3 sm:grid-cols-2">
                  {filteredItems.map((item: CardTypesData) => {
                    return (
                      <Card
                        id={item.id}
                        title={item.title}
                        thumbnail={item.thumbnail}
                        price={item.price}
                        key={item.id}
                      />
                    );
                  })}
                </div>
                <hr className="border-secondary border-t-2 w-full" />
              </>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default MainContent;
