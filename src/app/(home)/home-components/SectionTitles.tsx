/*
Because of tailwind css I can't reuse same classes, so I decided to create component for section titles because they will all share same functunalities
 */
import React from "react";
import { Inter } from "next/font/google";

const SectionTitles = ({ children }: { children: string }) => {
  return <h2>{children}</h2>;
};

export default SectionTitles;
