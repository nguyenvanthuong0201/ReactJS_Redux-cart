import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import { actAddToCart, actChangeMessage } from "../actions/index";
import message from "../reducers/message";
import Message from "../constants/Messages"

class ProductsContainer extends Component {
  showProduct = (products) => {
    let result = null;
    let {onAddToCart,onChangeMessage}= this.props
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product 
        key={index}
        product={product}
        onAddToCart={onAddToCart}  // truyền action vào product
        onChangeMessage={onChangeMessage} />; 
      });
    }
    return result;
  };
  render() {
    let { products } = this.props;
    return <Products>{this.showProduct(products)}</Products>;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));   // tạo 1 cái dispatch để truyền action vào product
    },
    onChangeMessage: (message)=>{ 
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
