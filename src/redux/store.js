import { configureStore } from "@reduxjs/toolkit";

import cartShow from "./slices/cartSlice"
import alerts from "./slices/alertSlice"
import menu from "./slices/menuSlice"
import layout from "./slices/layoutSlice"

export const store = configureStore({
    reducer: {
        cartShow,
        alerts,
        menu,
        layout
    }
});