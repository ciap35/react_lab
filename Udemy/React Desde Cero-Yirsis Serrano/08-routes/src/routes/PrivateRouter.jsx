import React from 'react'
import { Route,Redirect } from 'react-router'
const PrivateRouter =({path,auth, component: Component, ...rest}) => {
    return (
        <Route {...rest} path={path} component={(props)=> auth.log ? <Component {...props}/> : <Redirect to='/login'/>}>
        </Route>
    )
}

export default PrivateRouter
