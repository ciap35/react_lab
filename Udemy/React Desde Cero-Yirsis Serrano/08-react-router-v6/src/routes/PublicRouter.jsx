import React, { useContext } from 'react'
import {  Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContext';

const PublicRouter = ({children}) => {
    const {status} = useContext(AuthContext);
    // return !authenticated ? children : <Navigate to="/" />;
    return !status.status ? children : <Navigate to="/characters" />;
}
// const PublicRouter = ({ path, auth, component: Component, ...rest }) => {

//     return (
//         <Route {...rest} path={path} render={(props) => (!auth.log ? <Component {...props} /> : <Navigate to="/login" />)}>
//         </Route>
//     )
// }

export default PublicRouter;
