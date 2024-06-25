import React from "react";

type ProductDetailsProps = {
  title: string;
  brand: string;
  description: string;
};
const ProductDetails = ({ title, brand, description }: ProductDetailsProps) => {
  return <div className="flex-1">ProductDetails</div>;
};

export default ProductDetails;
