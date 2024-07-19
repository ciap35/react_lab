import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import AppRouter from './AppRouter';
import { AuthContext } from '../context/AuthContext';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const LoginRouter = () => {
  const {log} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRouter path='/login' auth={log} component={Login}></PublicRouter>
        <PrivateRouter path='/' auth={log} component={AppRouter}></PrivateRouter>
        {/* <Route exact path="/login" component={Login} />
        <Route path="/" component={AppRouter} /> */}
        {/* <Redirect to="/login" /> */}
      </Switch>
    </Router>
  );
};

export default LoginRouter;
