import { Link } from 'react-router-dom'
import '../styles/Home.css'

export function Home () {
  return (
    <div className='home-container'>
      <h1>Bienvenido,</h1>
      <p className='p-home'>Crea, elimina o actualiza tus tareas, deberes o pendientes.</p>
      <Link className='register-link' to='/register'>Comienza ahora</Link>
    </div>
  )
}
