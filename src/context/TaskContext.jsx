import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTasksRequest } from '../api/tasks.js'

const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('useTask must be used within an TaskProvider')
  }

  return context
}

export function TaskProvider ({ children }) {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const res = await getTasksRequest()
    setTasks(res.data)
    console.log(res)
  }

  const createTask = async (task) => {
    const res = await createTaskRequest(task)
    console.log(res)
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
