import { Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'
import '../styles/Tasks.css'

export function TaskCard ({ task }) {
  const { deleteTask } = useTasks()

  return (
    <div className='task-card-container'>
      <h1 className='tittle'>{task.tittle}</h1>
      <p className='description'>{task.description}</p>
      <div className='tasks-options'>
        <button className='delete-task' onClick={() => deleteTask(task._id)}>Eliminar</button>
        <Link className='update-task' to={`/tasks/update-task/${task._id}`}>Actualizar</Link>
      </div>
    </div>
  )
}
