import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./style.css";

function ProductFilter() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductData(data.listing.products);
      });
  }, []);

  return (
    <div className="ProductFilter">
      {productData.map((product, id) => {
        return <h1>{[product.brand.name]}</h1>;
      })}
    </div>
  );
}

export default ProductFilter;
