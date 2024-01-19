import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext.jsx'

export function TaskForm () {
  const { register, handleSubmit } = useForm()
  const { createTask } = useTasks()

  const onSubmit = handleSubmit((values) => {
    createTask(values)
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
        <button>Add</button>
      </form>
    </div>
  )
}
