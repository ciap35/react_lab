import React,{useState} from 'react'
import MainRouter from './routes/MainRouter'
import {UserContext} from './contexts/UserContext'

const App = () => {

  const [user,setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <MainRouter/>
    </UserContext.Provider>
    </div>
  )
}

export default App