"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Todos from "@/components/Todos";
import Todo from "@/models/todo";
import NewTodo from "@/components/NewTodo";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      console.log(todoId)
     return prevTodos.filter(todo => todo.id !== todoId)
    });
  }

  return (
    <main className={styles.main}>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </main>
  );
}
