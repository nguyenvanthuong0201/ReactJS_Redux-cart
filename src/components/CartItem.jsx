import React, { Component } from "react";
import *as Message from "../constants/Messages";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      quantity: 1,
    }
  }
  onUpdateCart = (product,quantity) =>{
    if(quantity > 0){
      this.setState({
        quantity:quantity
      })
      this.props.onUpdateCart(product,quantity)
      this.props.onUpdateMessage(Message.MSG_UPDATE_CARD_SUCCESS)
    }
  }
  
  onDelete=(product)=>{
    this.props.onDeleteCart(product)
    this.props.onDeleteMessage(Message.MSG_DELETE_CARD_SUCCESS)
  }
  sum=(quantity,price)=>{
      return quantity*price
  }
  render() {
    let { item ,onUpdateCart } = this.props;
    let { quantity } = this.state;
    console.log(quantity)
    return (
      <tr>
        <td scope="row">
          <img
            src={item.product.image}
            alt=""
            className="img-fluid z-depth-0"
          />
        </td>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
             btn-rounded waves-effect waves-light"
             onClick={()=> this.onUpdateCart(item.product,item.quantity - 1)}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
            btn-rounded waves-effect waves-light"
            onClick={()=> this.onUpdateCart(item.product,item.quantity + 1)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.sum(item.quantity, item.product.price)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={()=>this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
