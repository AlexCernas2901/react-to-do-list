import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

export function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin, isAuthenticated, authErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks/get-tasks')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signin(values)
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks')
    }
  }, [isAuthenticated])

  return (
    <div>
      {
        authErrors.map((error, index) => (
          <span key={index}>{error}</span>
        ))
      }
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        {errors.username && <span>Username is required</span>}
        <input
          type='email' {
          ...register('email', { required: true })
        }
        />
        {errors.username && <span>Username is required</span>}
        <input
          type='password' {
          ...register('password', { required: true })
        }
        />
        {errors.username && <span>Username is required</span>}
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}
