import React from "react";
import sale from "./sale.jpg";
import nosale from "./nosale.jpg";

const Product = ({ price, onSale, image, title }) => (
  <div className="product-card">
    {price > 50 && onSale && (
      <img src={sale} width="50%" height="auto" alt="On sale" />
    )}
    {price < 50 && onSale && (
      <img src={nosale} width="50%" height="auto" alt="Not on sale" />
    )}
    <div className="product-image">
      <img src={image} />
    </div>
    <div className="product-info">
      <h5>{title}</h5>
      <h6>{price}</h6>
    </div>
  </div>
);

export default Product;
