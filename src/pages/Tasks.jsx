import { useTasks } from '../context/TaskContext.jsx'
import { useEffect } from 'react'
import { TaskCard } from '../components/TaskCard.jsx'

export function Tasks () {
  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return (<h3>No hay tareas</h3>)

  return (
    <div>
      {
      tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))
      }
    </div>
  )
}
