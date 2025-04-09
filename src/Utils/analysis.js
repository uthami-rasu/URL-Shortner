import { createSlice } from "@reduxjs/toolkit";


const analysisDataSlice = createSlice({
    name: "analysisData",
    initialState: {
        totalVisits: 0,
        bulkData: null
    },
    reducers: {
        updateTotalVisits: (state, action) => {
            state.totalVisits = action.payload
        },
        updateBulkData: (state, action) => {
            state.bulkData = action.payload;
        }
    }

})

export const { updateBulkData, updateTotalVisits } = analysisDataSlice.actions;

export default analysisDataSlice.reducer; 