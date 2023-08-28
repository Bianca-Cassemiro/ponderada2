import { Inter } from '@next/font/google'
import styles from './Card.module.scss'
const inter = Inter({ subsets: ['latin'] })

export default function Card(props) {
  return (
    <>
        <main className={styles.main}>
        <p>{props.task.name}</p>
        </main>
    </>
  )
}
