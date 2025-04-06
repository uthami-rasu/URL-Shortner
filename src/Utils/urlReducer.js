import { createSlice } from "@reduxjs/toolkit";

const urlSlicer = createSlice({
    name: "urlSlice",
    initialState: {
        qr_destination: null,
        short_link_destination: null
    },
    reducers: {
        updateQrDestination: (state, action) => {
            state.qr_destination = action.payload;
        },
        updateShortLinkDestination: (state, action) => {
            state.short_link_destination = action.payload;
        }
    }
})


export const { updateQrDestination, updateShortLinkDestination } = urlSlicer.actions;


export default urlSlicer.reducer; 