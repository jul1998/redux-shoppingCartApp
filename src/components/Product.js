import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart_slice";
import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addItem({ id, name, price, imgURL }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
};

export default Product;
