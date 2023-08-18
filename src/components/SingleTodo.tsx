import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import {MdDone} from "react-icons/md";
import TodoList from "./TodoList";
type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    id: number;

}
const SingleTodo = ({todo, todos, setTodos, id}:Props)=>{
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id:number)=>{
        setTodos(
            todos.map((todo)=>todo.id === id? {...todo, isDone:!todo.isDone}:todo)
        )}

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

    const handleDelete = (id:number)=>{
        setTodos(todos.filter((todo)=> todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) =>{
        e.preventDefault()
        setTodos(todos.map((todo)=>(
            todo.id === id ? {...todo, todo: editTodo} : todo
        )))
        setEdit(false)
    }

    return <form className="todosSingle" onSubmit={(e)=>handleEdit(e, todo.id)}>
        {
            edit ? (
                <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)} className="todosSingle--text"/>
            ) :
                ( todo.isDone ? (
                    <s className="todosSingle--text">{todo.todo}</s>
                ): (
                    <span className="todosSingle--text">{todo.todo}</span>
                )
            )
        }
        
        <div>
            <span className="icon" onClick={()=>{
                    if(!edit && !todo.isDone){
                        setEdit(!edit)
                    }
                }
                }>
                <AiFillEdit />
            </span>
            <label htmlFor={`delete`}>
                <span className="icon" data-testid={`delete${id}`} id={`delete${id}`} onClick={()=>handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
            </label>
            <label htmlFor={`done`}>done</label>
                <span className="icon" data-testid={`done`} id={`done${id}`} onClick={()=>handleDone(todo.id)}>
                    <MdDone />
                </span>
            
        </div>
    </form>
}

export default SingleTodo;