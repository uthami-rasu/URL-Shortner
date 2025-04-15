import { createSlice } from "@reduxjs/toolkit";

const urlSlicer = createSlice({
    name: "urlSlice",
    initialState: {
        qr_destination: "",
        short_link_destination: "",
        qr_error: null,
        short_link_error: null,
        qrTitle: "",
        shortLinklTitle: "",
        urlLists: []
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
        },
        updateShortLinkTitle: (state, action) => {
            state.shortLinklTitle = action.payload;
        },
        updateQrTitle: (state, action) => {
            state.shortLinklTitle = action.payload;
        },
        addUrlLists: (state, action) => {
            state.urlLists = action.payload
        }
    }
})


export const { updateQrDestination, updateShortLinkDestination, updateError, addUrlLists } = urlSlicer.actions;


export default urlSlicer.reducer; 