import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Navbar.css'

export function Navbar () {
  const { isAuthenticated, logout, user } = useAuth()

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <Link className='tittle-link' to={isAuthenticated ? '/tasks' : '/'}>
          Lista de deberes
        </Link>
        {
          isAuthenticated
            ? (
              <>
                <span className='welcome-user'>Bienvenido, {user.username}!</span>
                <Link to='/tasks' className='nav-link'>
                  Tareas
                </Link>
                <Link to='/tasks/add-task' className='nav-create-task'>
                  Crear tarea
                </Link>
                <button onClick={logout} className='logout-button'>
                  Cerrar sesión
                </button>
              </>
              )
            : (
              <>
                <Link className='login-link' to='/login'>
                  Iniciar sesión
                </Link>
                <Link className='register-link' to='/register'>
                  Registrarse
                </Link>
              </>
              )
        }
      </div>
    </nav>
  )
}
