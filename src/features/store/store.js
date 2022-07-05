import { configureStore } from '@reduxjs/toolkit'
import stylesSlice from '../reducers/stylesSlice';
import todoSlice from "../reducers/todoSlice";


export const store = configureStore({
    reducer: {
        todo:todoSlice,
        styles:stylesSlice
    }
})