import React, {useState} from 'react'
import { toast } from 'react-toastify';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    console.log(value)

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
        // console.log(value)
        addTodo(value);
          setValue('');
          // clear form after submission
        }
      };
 

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text"  onChange={(e) => setValue(e.target.value)} className="todo-input" value={value} placeholder='What is the task today?' />
    <button type="submit" className='todo-btn' >Add Task</button>
  </form>
  )
}
