import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import {authTypes} from '../types/authTypes';
const Login = ({history}) => {
  
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () =>{
            dispatch({type: authTypes.login})
            console.log(history);
            history.push("/");
    }

    return (
    <div className='container mt-5 text-center'>
      <img src="../assets/animate.gif" alt=""></img>
      <h1 className='my-3'>Login Screen</h1>
      <button className="btn btn-primary" onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default Login