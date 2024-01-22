import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './pages/register.jsx'
import { Login } from './pages/Login.jsx'
import { Tasks } from './pages/Tasks.jsx'
import { TaskForm } from './pages/TaskForm.jsx'
import { Home } from './pages/Home.jsx'
import { ProtectedRoutes } from './ProtectedRoutes.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Navbar } from './components/Navbar.jsx'

export function App () {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/tasks' element={<Tasks />} />
              <Route path='/tasks/add-task' element={<TaskForm />} />
              <Route path='/tasks/update-task/:id' element={<TaskForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}
