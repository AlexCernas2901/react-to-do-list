import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from '../api/tasks.js'

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

  const deleteTask = async (id) => {
    const res = await deleteTaskRequest(id)
    if (res.status === 204) {
      const newTasks = tasks.filter((task) => task._id !== id)
      setTasks(newTasks)
    }
  }

  const getTask = async (id) => {
    const res = await getTaskRequest(id)
    return res.data
  }

  const updateTask = async (id, task) => {
    await updateTaskRequest(id, task)
  }

  return (
    <TaskContext.Provider value={{ getTask, updateTask, tasks, createTask, deleteTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
