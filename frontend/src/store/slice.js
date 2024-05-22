import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo's",
    initialState:{
        toDos:[]
    },
    reducers:{
        addToDos:(state,action)=>{
            state.toDos.push(...action.payload)
        }
    }
});
export const {addToDos} = todoSlice.actions
export default todoSlice;

