"use client";
import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "@/store/todo-context";

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const newTodoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }
    newTodoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

// //props version
// import React, { useRef } from 'react'
// import classes from './NewTodo.module.css'

// const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
//     const todoTextInputRef = useRef<HTMLInputElement>(null);

// const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();
//     const enteredText = todoTextInputRef.current!.value;

//     if (enteredText.trim().length === 0) {
//         //throw error
//         return
//     }
//     props.onAddTodo(enteredText);
// }

//   return (
//     <form onSubmit={submitHandler} className={classes.form}>
//         <label htmlFor="text"></label>
//         <input type="text" id='text' ref={todoTextInputRef}/>
//         <button>Add Todo</button>
//     </form>
//   )
// }

// export default NewTodo
