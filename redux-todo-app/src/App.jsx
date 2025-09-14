import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './slices/todoSlice.jsx'
import {v4 as uuid} from 'uuid';

function App() {
  const [todoInput, setTodoInput] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const onAddTodoClick = () => {
    dispatch(addTodo({ id: uuid(), todo: todoInput }));
    setTodoInput("");
  }

  const onDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  }

  console.log(todos);


  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" placeholder='Add todo...' />
        <button onClick={onAddTodoClick}>Add</button>
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.todo}</span>
            <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default App
