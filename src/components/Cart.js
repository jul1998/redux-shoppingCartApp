import React from "react";
import "./Cart.css";
import { useSelector, useDispatch} from "react-redux";
import { cartActions } from "../store/cart_slice";
const Cart = () => {

  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const quantity = cartTotalQuantity;

  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.showCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
