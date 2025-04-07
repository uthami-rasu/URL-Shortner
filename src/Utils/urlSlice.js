import { createSlice } from "@reduxjs/toolkit";

const urlSlicer = createSlice({
    name: "urlSlice",
    initialState: {
        qr_destination: "",
        short_link_destination: "",
        qr_error: null,
        short_link_error: null
    },
    reducers: {
        updateQrDestination: (state, action) => {
            state.qr_destination = action.payload;
        },
        updateShortLinkDestination: (state, action) => {
            state.short_link_destination = action.payload;
        },
        updateError: (state, action) => {

            console.log("State Updated", action.payload);
            if (action.payload?.isQr) {
                state.qr_error = action.payload?.error;
                return
            }
            state.short_link_error = action.payload?.error;
        }
    }
})


export const { updateQrDestination, updateShortLinkDestination, updateError } = urlSlicer.actions;


export default urlSlicer.reducer; 