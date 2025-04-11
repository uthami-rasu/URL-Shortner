import { createSlice } from "@reduxjs/toolkit";


const authSlicer = createSlice({
    name: "authetication",
    initialState: {
        user: {
            uid: null,
            isLogin: null,
            username: null,
            email: null
        }
    },

    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            return { user: null };
        }
    }

})


export const { addUser, removeUser } = authSlicer.actions;


export default authSlicer.reducer;

