import { createSlice } from "@reduxjs/toolkit";

const popupSlicer = createSlice({
    name: "popup",
    initialState: {
        qr: {
            isQrOpen: false,
            currQrLink: "https://google.com?q=Leo",
            currTitle: "No Title"
        }


    },
    reducers: {
        updateQrPopup: (state, action) => {
            state.qr = { ...action.payload }
        },

    }
})


export const { updateQrPopup } = popupSlicer.actions;


export default popupSlicer.reducer; 