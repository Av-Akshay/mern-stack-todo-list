import React from 'react';
import useTodoForm from '../hooks/useTodoForm';

const TodoList = () => {
    const {data} = useTodoForm();
  return (
   <ul>
{
    data?.map((item)=>{
      return <li className='capitalize font-medium text-center' key={item?._id}> {item?.todo} 
      <button className='border-2 border-slate-800 rounded-md ms-5 px-3 py-1'>delete</button>
       </li>
    })
}
   </ul>
  )
}

export default TodoList