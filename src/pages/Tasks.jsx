import { useTasks } from '../context/TaskContext.jsx'
import { useEffect } from 'react'

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
        <div key={task._id}>
          <h3>{task.tittle}</h3>
          <p>{task.description}</p>
        </div>
      ))
      }
    </div>
  )
}
