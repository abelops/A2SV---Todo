 import React, { useRef } from "react";
 import './styles.css'

 interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
 }
 const InputFeild = ({todo, setTodo, handleAdd}: Props)=>{
    const inputRef = useRef<HTMLInputElement>(null);
    return(
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur()
            }}>
            <input type="input" id="input-box" ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" className="inputBox" />
            <button className="inputSubmit"id="go-button" type="submit"> GO</button>
        </form>
    )
 }

 export default InputFeild