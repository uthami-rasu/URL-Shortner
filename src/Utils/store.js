import { configureStore } from "@reduxjs/toolkit";

import colorReducer from "./colorSlice";
import urlReducer from "./urlSlice";
import authReducer from "./authSlice";
import analysisReducer from "./analysis"
import filterReducer from "./filterSlice";
import popupReducer from "./popupSlice"
const appStore = configureStore({
    reducer: {
        colors: colorReducer,
        urls: urlReducer,
        auth: authReducer,
        analysis: analysisReducer,
        filters: filterReducer,
        popups: popupReducer

    }
})


export default appStore;
