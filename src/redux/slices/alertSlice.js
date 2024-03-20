import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAlertAdd: false,
    showAlertSend: false,
};

const alertSlice = createSlice({
    name: "alerts",
    initialState,
    reducers: {
        toggleAlertAdd(state) {
            state.showAlertAdd = !state.showAlertAdd
        },
        toggleAlertSend(state) {
            state.showAlertSend = !state.showAlertSend
        }
    }
})

export const { toggleAlertAdd, toggleAlertSend } = alertSlice.actions;
export default alertSlice.reducer;