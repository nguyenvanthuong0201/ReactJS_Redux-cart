import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import * as Message from "../constants/Messages";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult"; /// 2. imp CartResutl để tính tổng
import { actDeleteProduct,actDeleteMessage,actUpdateCart ,actUpdateMessage} from "../actions/index";
import message from "../reducers/message";
class CartContainer extends Component {
  showSum = (cart) => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
  showCartItem = (cart) => {
    let { onDeleteCart,onDeleteMessage,onUpdateCart,onUpdateMessage} = this.props;
    let result = (
      <tr>
        <td>{Message.MSG_CARD_EMPTY}</td>
      </tr>
    );  
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteCart={onDeleteCart}
            onDeleteMessage={onDeleteMessage}
            onUpdateCart={onUpdateCart}
            onUpdateMessage={onUpdateMessage}
          />
        );
      });
    }
    return result;
  };
  render() {
    let { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {/* 1.thêm func để tính tổng tiền */}
        {this.showSum(cart)}
      </Cart>
    );
    //// return không nên xuất hiện dấu cách sau card thì sẽ dễ bị lỗi cú pháp
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteCart: (product) => {
      dispatch(actDeleteProduct(product));
    },
    onDeleteMessage:(message)=>{
      dispatch(actDeleteMessage(message))
    },
    onUpdateCart: (product,quantity) =>{
      dispatch(actUpdateCart(product,quantity))
    },
    onUpdateMessage:(message)=>{
      dispatch(actUpdateMessage(message))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
