import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import {authTypes} from '../types/authTypes';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () =>{
            dispatch({type: authTypes.login})
            console.log(navigate);
            navigate("/");
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