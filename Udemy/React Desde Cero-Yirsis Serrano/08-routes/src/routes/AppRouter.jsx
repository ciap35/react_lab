import React, {lazy,Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MenuNavBar from '../components/MenuNavBar';
const MenScreen = lazy(()=> import('../pages/MenScreen'));
const WomenScreen = lazy(()=> import('../pages/WomenScreen'));
const Search = lazy(()=> import( '../pages/Search'));
const Home = lazy(()=> import( '../pages/Home')); 
const NotFound = lazy(()=> import( '../pages/NotFound'));
const Character = lazy(()=> import( '../pages/Character'));
const CharacterDetail = lazy(()=> import( '../components/CharacterDetail'));




const AppRouter = () => {
  return (
    <>
      <MenuNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={Character} />
        <Route path="/men" component={MenScreen} />
        <Route path="/women" component={WomenScreen} />
        <Route path="/search" component={Search} />
        <Route path="/character/" component={Character}/>
        <Route path="/detail/:characterId" component={CharacterDetail}/>
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </>    
  );
};

export default AppRouter;
