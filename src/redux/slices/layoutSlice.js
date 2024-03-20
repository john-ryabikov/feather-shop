import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showLay: false,
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleShowLay(state) {
            state.showLay = !state.showLay
        }
    }
})

export const { toggleShowLay } = layoutSlice.actions;
export default layoutSlice.reducer;