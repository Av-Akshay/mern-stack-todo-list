import React, { useState } from 'react';
import {useForm} from "react-hook-form";
import axios from "axios"
import { addToDos } from '../store/slice';
import { useDispatch, useSelector } from 'react-redux';


const useTodoForm = () => {
  const [error,setError] = useState("");
  const [allTodo,setAllTodo] = useState("");
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

   const handelAddTodo = async(data)=>{
    try {
      const response = await axios.post("http://localhost:3000/addTodo",{data})
      if(response.data.error){
        setError(response.data.error)
      }else if( response.data.allTodo){
        dispatch(addToDos(response.data.allTodo))
      }
    } catch (error) {
      console.log(error);
    }
    reset();
   }
   const data = useSelector((store)=>store.todoReducer.toDos);
   console.log(data);
  return{
    errors,
    handleSubmit,
    register,
    handelAddTodo,
    error,
    allTodo,
    data
  }
}

export default useTodoForm