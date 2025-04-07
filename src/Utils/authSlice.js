import { createSlice } from "@reduxjs/toolkit";


const authSlicer = createSlice({
    name: "authetication",
    initialState: {
        isLogin: null
    },
    changeAuthStatus: (state, action) => {
        state.isLogin = action.payload;
    }
})


export const { changeAuthStatus } = authSlicer.actions;


export default authSlicer.reducer;

