import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MenScreen from '../pages/MenScreen';
import WomenScreen from '../pages/WomenScreen';
import Search from '../pages/Search';
import Home from '../pages/Home'; // Asegúrate de tener esta página
import MenuNavBar from '../components/MenuNavBar';
import NotFound from '../pages/NotFound'
import Character from '../pages/Character';
import CharacterDetail from '../components/CharacterDetail';
const AppRouter = () => {
  return (
    <>
      <MenuNavBar />
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
    </>
  );
};

export default AppRouter;
