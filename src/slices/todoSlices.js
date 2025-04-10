import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : "todo",
    initialState : { todos : []}, 
    reducers : {
        addTodo : () => {},
        //removerTodo :
    },
})

 export const todoReducer = todoSlice.reducer;