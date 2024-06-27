"use client";
/* I decided to use useContext for global state managment, because imo redux,
 zustand etc. is overkill for this type of project since this is small application*/

import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

interface CheckProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  toastFn: (state: "success" | "error") => void;
  categoriesG: string[];
  setCategoriesG: React.Dispatch<React.SetStateAction<string[]>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}
const LogicCntx = createContext<CheckProps | null>(null);

const Logic = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  //Filter
  const [search, setSearch] = useState<string>("");
  const [categoriesG, setCategoriesG] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("");

  //Product items
  const [quantity, setQuantity] = useState<number>(1);

  //Radio button container
  const [color, setColor] = useState<string>("Red"); //I am getting here 3 values however I specifed here string because I am 100% getting Red | Blue | Green

  //Global
  const toastFn = (state: "success" | "error"): void => {
    toast[state]("This feature will be implemented soon!", { duration: 4000 });
  };

  return (
    <LogicCntx.Provider
      value={{
        search,
        setSearch,
        toastFn,
        categoriesG,
        setCategoriesG,
        sort,
        setSort,
        quantity,
        setQuantity,
        color,
        setColor,
      }}
    >
      {children}
    </LogicCntx.Provider>
  );
};

export default Logic;

//Custom hook to ensure that LogicContext is being used inside the appropriate provider
export const logicContextChecker = () => {
  const cntx = useContext(LogicCntx);
  if (!cntx) throw new Error("this fn must be inside of this");

  return cntx;
};
