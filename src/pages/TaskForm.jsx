import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function TaskForm () {
  const { register, handleSubmit, setValue } = useForm()
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id)
        setValue('tittle', task.tittle)
        setValue('description', task.description)
      }
    }
    loadTask()
  }, [])

  const onSubmit = handleSubmit((values) => {
    if (params.id) { // Actualizando tarea
      updateTask(params.id, values)
    } else { // Creando tarea
      createTask(values)
    }

    navigate('/tasks')
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Tittle'
          {...register('tittle')}
        />
        <textarea
          rows='3'
          placeholder='Description'
          {...register('description')}
        />
        <button>Save</button>
      </form>
    </div>
  )
}
