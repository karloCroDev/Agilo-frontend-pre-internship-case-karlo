"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../../global-components/exports";
import { SectionTitles } from "../../customs/exports";
import { CardTypesData } from "../../global-types/apiCallTypes";
import { logicContextChecker } from "../../contexes/Logic";

const MainContent = ({ data }: { data: CardTypesData[] | null }) => {
  const { search, setCategoriesG, categoriesG, sort, setSearch, setSort } =
    logicContextChecker();

  const [sectionItems, setSectionItems] = useState<[][]>([]);
  useEffect(() => {
    // When user clicks on the title/logo it sends him to the starting page (home), values in these two remains even though it shouldn't. So this just resets them
    setSearch("");
    setSort("");
    //
    const categories: any = Array.from(
      new Set(data?.map((item) => item.category))
    );

    /* So I decieded to not limit my self to only small amount of categories which are not scalable so I decided to avoid this approach *
    const beauty=data?.filter(item=>item.category==='beauty')
    const fragrances=data?.filter(item=>item.category==='fragrances')
    const furniture=data?.filter(item=>item.category==='furniture')
    etc.
   */

    //So my idea is to implement algorithm to sort items in categories using 2d array

    //So sectionItems is an array and then inside forEach loop it checks if previous item is from that category, if it isn't then it pushes the already made array (temporaryStorage) to section items (so all items from that category)

    //Now I am getting all items sorted from an api, however for future instances if items were added it wouldn't be sorted, but this can be solved using .sort() method which would sort the items (sort items to their description in alphabetical order), so this algorithm would still be actual
    let sectionItems: [][] = [];
    let temporaryStorage: any = [];
    let check = "";

    setCategoriesG(categories);

    if (data !== null) {
      //boring ts 😑
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
            {filteredItems.length > 0 ? (
              //Reason I wrapped all is because when I don't wrap the div container it takes up the space on the screen (even though it displays nothing) so it doesn't look very nice. When I wrap it all it acctually fixes the problem
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
                        id={item?.id}
                        title={item?.title}
                        thumbnail={item?.thumbnail}
                        price={item?.price}
                        key={item?.id}
                      />
                    );
                  })}
                </div>
                <hr className="border-secondary border-t-2 w-full " />
              </>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default MainContent;
