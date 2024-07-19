import React, { useContext,useEffect } from 'react'
import { UserContext } from "../contexts/UserContext";
import { userData } from "../helpers/userData";
const Home = () => {

  const { user, setUser } = useContext(UserContext)


  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  const handleLogin = () => {
    // Guardar datos en SessionStorage
    sessionStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  }

  return (
    <div className='container text-center'>
      <h1>Home</h1>
      {user && <h2>{user.data.first_name}</h2>}
      {!user &&
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
      }{user &&
        <button className='btn btn-dark' onClick={handleLogout}>Logout</button>
      }
    </div>
  )
}

export default Home
