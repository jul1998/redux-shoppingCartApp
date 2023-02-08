import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth_slice";
import cartSlice from "./cart_slice";
import ulSlice from "./ul_slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ul: ulSlice.reducer
    }})

export default store;