import { createSlice } from "@reduxjs/toolkit";


const requestBookingSlice = createSlice({
    name:'requestBooking',
initialState:{requestTitle:""},
reducers:{
    addTitle(state,action){
        state.requestTitle = action.payload



    }
}
}
)

export const {addTitle} = requestBookingSlice.actions
export default requestBookingSlice.reducer;

