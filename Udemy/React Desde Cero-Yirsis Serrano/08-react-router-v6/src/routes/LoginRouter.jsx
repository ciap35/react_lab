import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import AppRouter from './AppRouter';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const LoginRouter = () => {
  
  

  return (
    <Router>
      <Routes>
      <Route path='/login' 
             element={<PublicRouter><Login/></PublicRouter>}/>
      <Route path='*' 
             element={<PrivateRouter><AppRouter/></PrivateRouter>}/>
        {/*Implementation with REACT V5.22 <PublicRouter path='/login' auth={log} component={Login}></PublicRouter>
        <PrivateRouter path='/' auth={log} component={AppRouter}></PrivateRouter> */}
      </Routes>
    </Router>
  );
};

export default LoginRouter;
