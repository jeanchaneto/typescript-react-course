import Image from 'next/image'
import styles from './page.module.css'
import Todos from '@/components/Todos'

export default function Home() {
  return (
    <main className={styles.main}>
      <Todos items ={['to do 1', 'to do 2', 'to do 3', 'to do 4']}/>
    </main>
  )
}
