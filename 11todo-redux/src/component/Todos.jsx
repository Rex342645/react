import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
    const todos=useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
        {todos.map(todo => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-800 text-white p-4 my-2">
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))} className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-lg">Remove</button>
            </li>


        ))}
    </div>
  )
}

export default Todos