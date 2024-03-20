import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

const menuSlice = createSlice({
    name: "menu-nav",
    initialState,
    reducers: {
        toggleOpen(state) {
            state.open = !state.open
        }
    }
})

export const { toggleOpen } = menuSlice.actions;
export default menuSlice.reducer;