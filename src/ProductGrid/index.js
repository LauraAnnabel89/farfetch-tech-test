import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import ProductFilter from "../ProductFilter";
import "./style.css";

function ProductGrid() {
  const [productData, setProductData] = useState([]);
  const [selectedDesigner, setSelectedDesigner] = useState({});

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
    <>
      <select>
        {productData.map((product, id) => {
          return (
            <option
              value={[product.brand.name]}
              onClick={(e) => setSelectedDesigner(e.target.value)}
            >
              {console.log(selectedDesigner)}
              {[product.brand.name]}
            </option>
          );
        })}
      </select>
      <div className="ProductGrid">
        {productData.map((product, id) => {
          return (
            <ProductCard
              key={product.id}
              link={product.url}
              imageProduct={[product.images.cutOut]}
              imageModel={[product.images.model]}
              merchandiseLabel={product.merchandiseLabel}
              brand={[product.brand.name]}
              shortDescription={product.shortDescription}
              price={[product.priceInfo.formattedFinalPrice]}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductGrid;
