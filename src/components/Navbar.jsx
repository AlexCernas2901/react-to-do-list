import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function Navbar () {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <nav>
      <h1>Task Manager</h1>
      <ul>
        {isAuthenticated
          ? (
            <>
              <li>
                <span>Welcome, {user.username}!</span>
              </li>
              <li>
                <Link to='/tasks'>Tasks</Link>
              </li>
              <li>
                <Link to='/tasks/add-task'>Add Task</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
            )
          : (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </>
            )}
      </ul>
    </nav>
  )
}
