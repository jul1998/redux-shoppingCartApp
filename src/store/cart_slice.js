import {createSlice} from '@reduxjs/toolkit';
import { ulActions } from './ul_slice';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        showCart: false,
        changed: false
    },
    reducers:{

        replaceCart(state, action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },

        addItem(state, action){
            state.changed = true;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    title: newItem.name,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action){
            state.changed = true
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        showCart(state){
            state.showCart = !state.showCart;
        }
    }
    
});


export const cartActions = cartSlice.actions;
export default cartSlice;