import React from "react";
import { Card, Filters, MainContent } from "./home-components/exports";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={`${inter.className} grid place-items-center`}>
      <div className="w-1/2 mt-5 flex flex-col gap-5">
        {/* Chnage the width do not make it 3/4 (temporary solution) */}
        <Filters />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
