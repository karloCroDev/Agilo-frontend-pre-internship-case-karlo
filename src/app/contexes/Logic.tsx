/* I decided to use useContext for global state mangament, because imo redux, zustand etc. is overkill for this type of project since this is small application*/
// import React, { createContext, useContext } from "react";

// export const LogicCntx = createContext(null);
// const Logic = ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) => {
//   return <LogicCntx.Provider value={{}}>{children}</LogicCntx.Provider>;
// };

// export default Logic;

// const logicContextChecker = () => {
//   const cntx = useContext(LogicCntx);
//   if (!cntx) console.log("this fn must be inside of this");

//   return cntx;
// };
