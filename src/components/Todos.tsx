import Todo from "@/models/todo";
import React from "react";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
