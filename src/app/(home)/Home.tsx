import React from "react";
import {
  Card,
  Filters,
  MainContent,
  SectionTitles,
} from "./home-components/exports";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={`${inter.className}`}>
      <SectionTitles>Additional filters</SectionTitles>
      <Filters />
    </div>
  );
};

export default Home;
