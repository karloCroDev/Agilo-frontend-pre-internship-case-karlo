import React from "react";
import Card from "./Card";

import { DefaultMargin, SectionTitles } from "../../customs/exports";
const MainContent = () => {
  return (
    <>
      <SectionTitles>See what api will return</SectionTitles>
      <DefaultMargin>
        <Card />
      </DefaultMargin>
    </>
  );
};

export default MainContent;
