import { createSlice } from "@reduxjs/toolkit";


const colorSlicer = createSlice({
    name: "Colors",
    initialState: {
        bgColor: "#031f39"
    }
    , reducers: {
        changeBgColor: (state, action) => {
            state.bgColor = action.payload;
        }
    }
})

export const { changeBgColor } = colorSlicer.actions;
export default colorSlicer.reducer;