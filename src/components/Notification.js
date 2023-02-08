import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {authActions} from "../store/auth_slice";
import {Alert} from "@mui/material"
import {ulActions} from "../store/ul_slice"


 const  Notification = ({type, message}) => {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ul.notification)

    const handleClose = () => {
        dispatch(ulActions.showNotification({
            type: "",
            message: "",
            open: false
        }))
    }

    return(
        <div>
            {notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}
        </div>
            
        )
}

export default Notification