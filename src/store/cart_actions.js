import { ulActions } from "./ul_slice";
import { cartActions } from "./cart_slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
        const response = await fetch("https://redux-http-ccd10-default-rtdb.firebaseio.com/cartItems.json");
        const data = await response.json();
        console.log(data);
        if(response.ok){
            dispatch(cartActions.replaceCart(data))
        }else{
            dispatch(ulActions.showNotification({
                type: "error",
                message: "There was an error fetching the cart data",
                open: true
            }))
        }
    }
    fetchHandler()
    }
}


export const sendCartData = (cart) => {
    return (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch("https://redux-http-ccd10-default-rtdb.firebaseio.com/cartItems.json", {
              method: "PUT",
              body: JSON.stringify(cart),
            });
      
            const data = await response.json();
            console.log(data);
            if(!response.ok){
              dispatch(ulActions.showNotification({
                type: "error",
                message: "There was an error sending the data",
                open: true
              }))
            }else{
              dispatch(ulActions.showNotification({
              type: "success",
              message: "Data was sent successfully",
              open: true
            }))
            }
            
          }
        dispatch(
            ulActions.showNotification({
            type: "warning",
            message: "Sending cart data...",
            open: true
          }))

        sendRequest()

            
        
    }
}