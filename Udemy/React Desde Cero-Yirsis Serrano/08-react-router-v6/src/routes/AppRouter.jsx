import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuNavBar from '../components/MenuNavBar';

const MenScreen = lazy(() => import('../pages/MenScreen'));
const WomenScreen = lazy(() => import('../pages/WomenScreen'));
const Search = lazy(() => import('../pages/Search'));
const Home = lazy(() => import('../pages/Home')); 
const NotFound = lazy(() => import('../pages/NotFound'));
const Character = lazy(() => import('../pages/Character'));
const CharacterDetail = lazy(() => import('../components/CharacterDetail'));

const AppRouter = () => {
  return (
    <>
      <MenuNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/men" element={<MenScreen />} />
          <Route path="/women" element={<WomenScreen />} />
          <Route path="/search" element={<Search />} />
          <Route path="/character" element={<Character />} />
          <Route path="/detail/:characterId" element={<CharacterDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
