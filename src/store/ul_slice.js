import {createSlice} from '@reduxjs/toolkit';

const ulSlice = createSlice({
    name: "ul",
    initialState: {notification: null},
    reducers: {
        showNotification(state, action){
            state.notification = {
                type: action.payload.status,
                message: action.payload.message,
                open: action.payload.open
            }
        }
    }
})


export const ulActions = ulSlice.actions;

export default ulSlice;