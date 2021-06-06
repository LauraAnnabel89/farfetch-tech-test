import React from "react";
import "./style.css";

function ProductCard(props) {
  return (
    <div className="ProductCard">
      <div key={props.id} className="product">
        <a href={props.link} className="product__link">
          <img
            src={props.imageProduct}
            alt={props.shortDescription}
            className="product__image"
          />
          <img
            src={props.imageModel}
            alt={props.shortDescription}
            className="product__image product__image--hover"
          />
          <span className="product__label">{props.merchandiseLabel}</span>
          <h3 className="product__brand">{props.brand}</h3>
          <p className="product__description">{props.shortDescription}</p>
          <p className="product__price">{props.price}</p>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
