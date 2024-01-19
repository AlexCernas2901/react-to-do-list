import { useAuth } from './context/AuthContext.jsx'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoutes () {
  const { loading, isAuthenticated } = useAuth()

  if (!isAuthenticated && !loading) return <Navigate to='/login' replace />

  return (
    <Outlet />
  )
}
