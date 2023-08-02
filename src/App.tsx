import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = ()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault()
    console.log(e.target)
    if(todo){
      setTodos([...todos, { id : Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
