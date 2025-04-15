// filterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        selectedOptions: [],
        filterOptions: []
    },
    reducers: {
        setSelectedOptions: (state, action) => {
            state.selectedOptions = action.payload;
        },
        setFilterOptions: (state, action) => {
            state.filterOptions = action.payload;
        },
        clearSelectedOptions: (state) => {
            state.selectedOptions = [];
        },
    },
});

export const { setSelectedOptions, clearSelectedOptions, setFilterOptions } = filterSlice.actions;
export default filterSlice.reducer;
