import React from "react";

import "./Product.css";
function Product({ image }) {
  return (
    <div>
      <img className="product__image" src={image} alt="" />
    </div>
  );
}

export default Product;
