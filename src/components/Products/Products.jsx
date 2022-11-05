import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product product={product} key={Math.random()} />
      ))}
    </>
  );
};

export default Products;
