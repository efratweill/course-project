import React, { Component } from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

class ProductList extends React.Component {
  state = { sale: true };

  saleOver = () => {
    this.setState(({ sale }) => ({ sale: !sale }));
    console.log(this.state.sale);
  };
  render() {
    const listItems = this.props.productsdetales.map((product) => (
      <Product
        onSale={this.state.sale}
        key={product.id}
        image={product.image}
        price={product.price}
        title={product.title}
      />
    ));

    return (
      <div>
        <div>
          <SaleCountDown endSale={this.saleOver} />
        </div>
        <section className="products" id="products">
          {listItems}
        </section>
      </div>
    );
  }
}

export default ProductList;
