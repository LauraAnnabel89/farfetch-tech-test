import React from "react";
import Header from "./Header";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductFilter />
      <ProductGrid />
    </div>
  );
}

export default App;
