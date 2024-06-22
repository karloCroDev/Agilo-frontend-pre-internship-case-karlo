"ise client";
/* I decided to use useContext for global state mangament, because imo redux,
 zustand etc. is overkill for this type of project since this is small application*/

/*Btw even though this wrraps whole app inside the use client, server components are still mounted on sever (link documnetation or smth like that)*/
import React, { createContext, useContext, useState } from "react";

//*Explain better this part of app (defienetly most confusing)

type CheckProps = {
  test: string;
  setTest: React.Dispatch<React.SetStateAction<string>>;
};
export const LogicCntx = createContext<CheckProps | null>(null);

const Logic = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [test, setTest] = useState<string>("");
  return (
    <LogicCntx.Provider value={{ test, setTest }}>
      {children}
    </LogicCntx.Provider>
  );
};

export default Logic;

//Custom hook that checks if LogicCntx is used inside the Logic component (mandatory, even though I am wrapping the whole app with this)
const logicContextChecker = () => {
  const cntx = useContext(LogicCntx);
  if (!cntx) console.log("this fn must be inside of this");

  return cntx;
};
