import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

export function Register () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signup, isAuthenticated, authErrors } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values)
  })

  return (
    <div>
      {
        authErrors.map((error, index) => (
          <span key={index}>{error}</span>
        ))
      }
      <form onSubmit={onSubmit}>
        <input
          type='text' {
          ...register('username', { required: true })
        }
        />
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
        <button type='submit'>Register</button>
      </form>
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}
