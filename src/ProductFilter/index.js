import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";
import "./style.css";

function ProductFilter(props) {
  return (
    <div className="ProductFilter">
      <select>
        <option value={props.brand} onChange={props.setSearchValue}>
          {props.brand}
        </option>
      </select>
    </div>
  );
}

// here

export default ProductFilter;
