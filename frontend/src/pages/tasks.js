import styles from '@/styles/Home.module.scss';
import Card from '@/components/Card/Card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fecthTasks = async () => {
    const response = await fetch('http://localhost:3333/todos');
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    fecthTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    console.log(task);
    const body = { name: task };

    const response = await fetch('http://localhost:3333/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    fecthTasks();
  };
  return (
    <>
      <main className={styles.main}>
        <h1>Tarefas do dia</h1>

        <form onSubmit={addTask}>
          <label htmlFor="task">Crie uma tarefa</label>
          <input type="text" id="task" />
          <button type="submit">Adicionar</button>
        </form>
        <div>
          {tasks.map((task) => (
            <Card task={task} />
          ))}
        </div>
      </main>
    </>
  );
}
