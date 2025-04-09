import { configureStore } from "@reduxjs/toolkit";

import colorReducer from "./colorSlice";
import urlReducer from "./urlSlice";
import authReducer from "./authSlice";
import analysisReducer from "./analysis"

const appStore = configureStore({
    reducer: {
        colors: colorReducer,
        urls: urlReducer,
        auth: authReducer,
        analysis: analysisReducer
    }
})


export default appStore;
