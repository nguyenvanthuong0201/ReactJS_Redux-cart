import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Products from "./components/Products";
// import Message from "./components/Message";
// import Cart from './components/Cart'
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <Header />
          </header>
          <main id="mainContainer">
            <div className="container">
              <ProductsContainer />
              <MessageContainer />
              <CartContainer />
            </div>
          </main>
          <footer className="page-footer center-on-small-only">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}
