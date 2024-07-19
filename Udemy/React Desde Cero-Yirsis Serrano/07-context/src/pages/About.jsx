import React, { useContext,useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

const About = () => {
  const { user,setUser } = useContext(UserContext);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);


  return (
    <div className='container text-center'>
      <h1>ABOUT</h1>
      {user ? (
        <div>
          <h2>{user.data.first_name} {user.data.last_name}</h2>
          <img src={user.data.avatar} alt={user.data.id} width="200px" height="200px"></img>
        </div>
      ) : (
        <h2>No user logged in</h2>
      )}
    </div>
  );
};

export default About;
