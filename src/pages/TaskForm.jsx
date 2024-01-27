import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/TaskForm.css'

export function TaskForm () {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const { createTask, getTask, getTasks, updateTask } = useTasks()
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
  }, [params.id])

  const onSubmit = handleSubmit((values) => {
    if (params.id) { // Actualizando tarea
      updateTask(params.id, values)
    } else { // Creando tarea
      createTask(values)
    }

    navigate('/tasks')
    getTasks()
  })

  return (
    <div className='tasks-form-container'>
      <form className='tasks-form' onSubmit={onSubmit}>
        <div className='input-group'>
          <label htmlFor='tittle'>Titulo:</label>
          <input
            id='tittle'
            className='input-form'
            type='text'
            maxLength={30}
            placeholder='Tarea'
            {...register('tittle', { required: true })}
          />
          {errors.tittle && <span className='error-message'>Titulo requerido</span>}
        </div>

        <div className='input-group'>
          <label htmlFor='description'>Descripcion:</label>
          <textarea
            id='description'
            className='txt-area'
            rows='3'
            maxLength={50}
            placeholder='Descripcion'
            {...register('description', { required: true })}
          />
          {errors.description && <span className='error-message'>Descripcion requerida</span>}
        </div>

        <div className='button-div'>
          <button className='register-link'>Save</button>
        </div>
      </form>
    </div>
  )
}
