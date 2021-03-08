import React from "react";
import ProductList from "../src/components/ProductList/ProductList";
import Nav from "../src/components/Nav/Nav";

import "./App.css";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

class App extends React.Component {
  state = {
    productDetails: [],
    category: "all",
  };

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        this.setState(() => ({ productDetails: products }));
      });
  }

  setCategory = (newCategory) => {
    this.setState(() => ({ category: newCategory }));
  };

  render() {
    const cat = Object.keys(groupBy(this.state.productDetails, "category"));
    cat.push("all");
    return (
      <div>
        <Nav categories={cat} setCategory={this.setCategory} />
        <ProductList
          newcategory={this.state.category}
          productsdetales={this.state.productDetails}
        />
      </div>
    );
  }
}

export default App;
