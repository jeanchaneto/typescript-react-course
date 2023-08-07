import React, { useRef } from 'react'

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);


const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredtext = todoTextInputRef.current!.value;

    if (enteredtext.trim().length === 0) {
        //throw erro
        return
    }

    
}

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor="text"></label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo