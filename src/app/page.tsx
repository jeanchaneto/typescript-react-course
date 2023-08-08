import Image from "next/image";
import styles from "./page.module.css";
import Todos from "@/components/Todos";

import NewTodo from "@/components/NewTodo";
import TodosContextProvider from "@/store/todo-context";

export default function Home() {
  return (
    <TodosContextProvider>
      <main className={styles.main}>
        <NewTodo />
        <Todos />
      </main>
    </TodosContextProvider>
  );
}
