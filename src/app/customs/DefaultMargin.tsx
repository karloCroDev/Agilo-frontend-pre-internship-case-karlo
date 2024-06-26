import React from "react";

//Just the component for default margin, first time working with tailwind css so I want to lead myself to DRY (Don't repeat yourself) prinicple
const DefaultMargin = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full xl:px-5 px-2">{children}</section>;
};

export default DefaultMargin;
