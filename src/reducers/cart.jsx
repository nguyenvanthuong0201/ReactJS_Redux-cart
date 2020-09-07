import * as types from "../constants/ActionTypes";
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
  let { product, quantity } = action;                 /// lấy sự kiện từ action sang
  let index = -1; //-1 có nghĩa là không tìm thấy
  switch (action.type) {
    case types.ADD_TO_CARD:
      index = findProductInCart(state, product); ///tìm vị trí của sản phẩm khi bấm vào sản phẩn mà mình chọn
      if (index !== -1) {
        /// nếu tìm thấy sản phẩm thì mình cộng dồn vô
        state[index].quantity += quantity;
      } else {
        state.push({
          //// còn không thì mình push vào thêm 1 sản phẩm chưa có
          product,
          quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
      
    case types.DELETE_PRODUCT:
      index = findProductInCart(state, product); /// tìm vị trí của sản phẩm khi bấm vào
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
      
    case types.UPDATE_CART:
      index = findProductInCart(state,product);
      if(index !== -1){
        state[index].quantity=quantity;   /// nếu tìm thấy thì vị trí mình chọn là sản phẩm được
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
      
    default:
      return [...state];
  }
};
const findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
