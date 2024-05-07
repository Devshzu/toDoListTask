import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value1, setValue1] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value1, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
