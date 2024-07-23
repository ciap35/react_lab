import React, { useReducer,useEffect } from 'react'
import { AuthReducer } from './reducers/AuthReducer'
import LoginRouter from './routes/LoginRouter'
import { AuthContext } from './context/AuthContext'

const init = () => {
  return JSON.parse(localStorage.getItem('status')) || { status: false }
}
const App = () => {
  const [status, dispatch] = useReducer(AuthReducer, {}, init);
  useEffect(() => {
    localStorage.setItem('status', JSON.stringify(status));
  }, [status])
  
  return ( <AuthContext.Provider value={{status,dispatch}}>
    <LoginRouter />
  </AuthContext.Provider>)
}

export default App