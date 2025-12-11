import { useState, useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { fetchWithCred } from '../utils'
import './App.css'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  function onLogout() {
    setIsAuth(false)
  }

  function onLogin() {
    setIsAuth(true)
  }

  useEffect(() => {
    fetchWithCred("/me").then((res) => {
      if (res.ok) {
        setIsAuth(true)
      }
    })
  }, [])


  return (
    <>
      {
        isAuth ? <Dashboard onLogout={onLogout} /> : <Login onLogin={onLogin} />
      }
    </>
  )
}

export default App
