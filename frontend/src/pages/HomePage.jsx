import React, { useEffect } from 'react';
import axios from "axios"
import InputForm from '../components/InputForm';
import TodoList from '../components/TodoList';

const HomePage = () => {
 
  return (
    <div className='w-full h-screen bg-slate-800 flex items-center justify-center'>
      <div className='h-[70vh] w-3/5 bg-white rounded-3xl p-5'>
      <InputForm/>
      <TodoList/>
      </div>
    </div>
  )
}

export default HomePage