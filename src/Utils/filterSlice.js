// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        selectedOptions: [],
    },
    reducers: {
        setSelectedOptions: (state, action) => {
            state.selectedOptions = action.payload;
        },
        clearSelectedOptions: (state) => {
            state.selectedOptions = [];
        },
    },
});

export const { setSelectedOptions, clearSelectedOptions } = filterSlice.actions;
export default filterSlice.reducer;
