import React,{ useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter =({children}) => {
    const {status} = useContext(AuthContext);
    return status.status ? children : <Navigate to="/login" />;
    // return authenticated ? children : <Navigate to="/login" />;
}

export default PrivateRouter
