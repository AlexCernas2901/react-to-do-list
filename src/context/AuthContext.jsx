import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth.js'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authErrors, setAuthErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error.response.data)
      setAuthErrors(error.response.data)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error.response.data)
      setAuthErrors(error.response.data)
    }
  }

  useEffect(() => {
    if (authErrors.length > 0) {
      const timer = setTimeout(() => { // Funcion para limpiar los errores despues de 5 segundos
        setAuthErrors([])
      }, 5000)
      return () => clearTimeout(timer) // Limpiar el timer
    }
  }, [authErrors])

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get()
      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      try {
        const res = await verifyTokenRequest(cookies.token)
        console.log(res)
        if (!res.data) return setIsAuthenticated(false)
        setIsAuthenticated(true)
        setUser(res.data)
        setLoading(false)
      } catch (error) {
        setIsAuthenticated(false)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, authErrors, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
