import { createSlice } from "@reduxjs/toolkit"
import { getFromLocalStorage, setLocalStorage } from "../localStorage"

const initialState = {
    todos:getFromLocalStorage('todos') || [],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, {payload}) => {
            state.todos.push({...payload, checked:false})
            setLocalStorage(state.todos)
        },

        deleteTodo:(state, {payload}) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
            setLocalStorage(state.todos)
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;

