import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";

class Products extends Component {
  showProduct = (products) => {
    let result = null;
    if (products.length > 0) {
        result=products.map((product,index)=>{
            return  <Product key={index} product={product} />
        });
    }
    return result;
  };
  render() {
    let { products } = this.props;

    console.log(products);
    return (
      <div>
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            {this.showProduct(products)}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps, null)(Products);
