import React, { Component } from "react";
import sale from "./sale.jpg";
import nosale from "./nosale.jpg";

class Product extends React.Component {
  render() {
    return (
      <div className="product-card">
        {this.props.price > 50 && this.props.onSale && (
          <img src={sale} width="50%" height="auto" />
        )}
        {this.props.price < 50 && this.props.onSale && (
          <img src={nosale} width="50%" height="auto" />
        )}
        <div className="product-image">
          <img src={this.props.image} />
        </div>
        <div className="product-info">
          <h5>{this.props.title}</h5>
          <h6>{this.props.price}</h6>
        </div>
      </div>
    );
  }
}

export default Product;
