/*
Because of tailwind css I can't reuse same classes, 
so I decided to create component for section titles because they will
 all share same functunalities
 Also I think this is cleaner than storing styles inside the varaibles
 */
import React from "react";

const SectionTitles = ({ children }: { children: string }) => {
  return <h2 className="text-3xl underline font-semibold ">{children}</h2>;
};

export default SectionTitles;
