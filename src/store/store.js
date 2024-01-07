import { configureStore } from "@reduxjs/toolkit";
import requestBookingReducer  from "./requestBookingSlice";
const store = configureStore(({
    reducer:{
        requestBooking : requestBookingReducer

    }
}))

export default store