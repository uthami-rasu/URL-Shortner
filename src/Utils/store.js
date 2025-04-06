import { configureStore } from "@reduxjs/toolkit";

import colorReducer from "./colorSlice";
import urlReducer from "./urlSlice";


const appStore = configureStore({
    reducer: {
        colors: colorReducer,
        urls: urlReducer
    }
})


export default appStore;
