import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
import { ulActions } from "./store/ul_slice";
import { sendCartData } from "./store/cart_actions";
import { fetchData } from "./store/cart_actions";

let isFirstRender = true;
function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const notification = useSelector(state => state.ul.notification)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
   
  }, [cart, dispatch]);

  return (
    <div className="App">
    {notification && <Notification type={notification.type} message={notification.message}/>}      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
