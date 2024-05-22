import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice";

const store = configureStore({
    reducer:{
        todoReducer: todoSlice.reducer 
    }
})

export default store;