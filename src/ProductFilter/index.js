import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./style.css";

function ProductFilter(props) {
const [productData, setProductData] = useState([]);
const [selectedDesigner, setSelectedDesigner] = useState(null);
const [searchTerm, setSearchResults] = useState("")
const [filteredProducts, setFilteredProducts] = useState([])

// Need to use selected designer as a 'search term'
// Filter the results of products based on that

useEffect(() => {
  fetch("/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setProductData(data.listing.products);
            console.log(productData);
    });
}, []);



  return (
    <div className="ProductFilter">
      <select   onChange={e => {
          setSelectedDesigner(e.target.value)}}>
      {productData.map((designer, id) => {
        return (
          <option
            value={[designer.brand.name]}
          >
            {[designer.brand.name]}
          </option>
        );
      })}
      </select>
      <h1>{selectedDesigner}</h1>
    </div>
  );
}

// here

export default ProductFilter;
