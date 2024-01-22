import { Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'

export function TaskCard ({ task }) {
  const { deleteTask } = useTasks()

  return (
    <div>
      <h1>{task.tittle}</h1>
      <p>{task.description}</p>
      <div>
        <button onClick={() => deleteTask(task._id)}>Delete</button>
        <Link to={`/tasks/update-task/${task._id}`}>Update</Link>
      </div>
    </div>
  )
}
