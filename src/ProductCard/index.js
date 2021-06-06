import React, { useState } from "react";
import "./style.css";

function ProductCard(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="ProductCard" key={props.id}>
      <a href={props.link} className="ProductCard__link">
        <img
          src={props.imageProduct}
          alt={props.shortDescription}
          className="ProductCard__image"
        />
        <img
          src={props.imageModel}
          alt={props.shortDescription}
          className="ProductCard__image ProductCard__image--hover"
        />
        <span className="ProductCard__label">{props.merchandiseLabel}</span>
        <h2 className="ProductCard__brand">{props.brand}</h2>
        <p className="ProductCard__description">{props.shortDescription}</p>
        <p className="ProductCard__price">{props.price}</p>
      </a>
    </div>
  );
}

export default ProductCard;
