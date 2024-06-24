import React from "react";
import { Slug } from "../home-components/apiCallsTypes";
const getDummyDataSpecifiedProduct = async (idOfItem: number) => {
  //Instead of using useParams, I can do this I think it's more readable

  const call = await fetch(`https://dummyjson.com/products/${idOfItem}`);
  const data = await call.json();
  return data;
};

const page = async (id: Slug) => {
  const data = await getDummyDataSpecifiedProduct(id.params.slug);
  console.log(data);
  return <div>This page doesn't exist</div>;
};

export default page;
