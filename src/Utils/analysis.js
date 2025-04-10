import { createSlice } from "@reduxjs/toolkit";
import { fillMissedDates } from "./utils";
const analysisDataSlice = createSlice({
    name: "analysisData",
    initialState: {
        data: {
            lineChartData: null,
            countryData: null,
            deviceTypeData: null,
            referrerData: null,
            browserTypeData: null
        },

    },
    reducers: {

        updateData: (state, action) => {


            state.data = {
                ...action.payload,
                lineChartData: fillMissedDates(action.payload?.lineChartData || []),
            };


        }
    }

})

export const { updateData } = analysisDataSlice.actions;

export default analysisDataSlice.reducer; 