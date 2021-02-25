import React from "react";
import ProductList from "../src/components/ProductList/ProductList";
import Nav from "../src/components/Nav/Nav";

import "./App.css";

class App extends React.Component {
  state = {
    productDetails: [],
  };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => this.setState({ productDetails: products }));
  }
  render() {
    return (
      <div>
        <Nav />
        <ProductList productsdetales={this.state.productDetails} />
      </div>
    );
  }
}

export default App;
