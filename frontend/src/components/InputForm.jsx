import React from 'react';
import useTodoForm from '../hooks/useTodoForm';
const InputForm = () => {
const {handelAddTodo,register,handleSubmit,errors} = useTodoForm();

  return (
    <div>
        <form className='flex' onSubmit={handleSubmit(handelAddTodo)}>
            <div className='w-full '>
            <input className='bg-slate-800 w-full p-2 border-2 border-slate-800 text-white' type="text" placeholder='Enter todo' {...register('todo', { required: true })} />
            {errors.todo && <p>Todo is required.</p>}
            </div>
            <button className='border-2 px-5 py-2' type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default InputForm