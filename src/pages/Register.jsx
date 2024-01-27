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
    <div className='register-container'>
      <form className='auth-form' onSubmit={onSubmit}>
        <h1 className='form-tittle'>Registrate</h1>

        <div className='input-group'>
          <label htmlFor='username'>Usuario:</label>
          <input
            className='input-form'
            placeholder='Noobmaster69'
            id='username'
            type='text'
            {...register('username', { required: true })}
          />
          {errors.username && <span className='error-message'>Usuario requerido</span>}
        </div>

        <div className='input-group'>
          <label htmlFor='email'>Correo:</label>
          <input
            className='input-form'
            placeholder='example@example'
            id='email'
            type='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='error-message'>Correo requerido</span>}
        </div>

        <div className='input-group'>
          <label htmlFor='password'>Contraseña:</label>
          <input
            className='input-form'
            placeholder='*********'
            id='password'
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && <span className='error-message'>Contraseña requerida</span>}
        </div>

        <div className='input-group'>
          {
            authErrors.map((error, index) => (
              <span className='error-message' key={index}>{error}</span>
            ))
          }
        </div>

        <div>
          <button className='register-link' type='submit'>Registrarse</button>
        </div>
      </form>
      <p className='p-account-state'>
        Ya tienes una cuenta? <Link className='login-link' to='/login'>Inicia sesión</Link>
      </p>
    </div>
  )
}
