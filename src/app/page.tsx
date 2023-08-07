import Image from 'next/image'
import styles from './page.module.css'
import Todos from '@/components/Todos'
import Todo from '@/models/todo';

export default function Home() {

const todos = [
  new Todo('Learn React'),
  new Todo('Learn Next.js'),
]

  return (
    <main className={styles.main}>
      <Todos items ={todos}/>
    </main>
  )
}
