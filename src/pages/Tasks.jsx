import { useTasks } from '../context/TaskContext.jsx'
import { useEffect } from 'react'
import { TaskCard } from '../components/TaskCard.jsx'
import '../styles/Tasks.css'

export function Tasks () {
  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length === 0) return (<h3 className='no-tasks'>No hay tareas</h3>)

  return (
    <div className='tasks-container'>
      {
      tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))
      }
    </div>
  )
}
