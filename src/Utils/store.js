import { configureStore } from "@reduxjs/toolkit";

import colorReducer from "./colorSlice";
import urlReducer from "./urlSlice";
import authReducer from "./authSlice";


const appStore = configureStore({
    reducer: {
        colors: colorReducer,
        urls: urlReducer,
        auth: authReducer
    }
})


export default appStore;
