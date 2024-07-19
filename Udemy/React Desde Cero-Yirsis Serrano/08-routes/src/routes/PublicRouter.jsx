import React from 'react'
import { Route, Redirect } from 'react-router'

const PublicRouter = ({ path, auth, component: Component, ...rest }) => {

    return (
        <Route {...rest} path={path} render={(props) => (!auth.log ? <Component {...props} /> : <Redirect to="/login" />)}>
        </Route>
    )
}

export default PublicRouter;
