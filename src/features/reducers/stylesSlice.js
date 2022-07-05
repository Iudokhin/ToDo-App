import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: false
}

export const stylesSlice = createSlice({
    name:'styles',
    initialState,
    reducers:{
        switchDark:(state) => {
            state.darkMode = !state.darkMode
        },
    }
})

export const {switchDark} = stylesSlice.actions;

export default stylesSlice.reducer;