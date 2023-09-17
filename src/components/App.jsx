import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SharedLayot from './SharedLayout/SharedLayout';

import CarsPage from 'Pages/Catalog/CarsPage';
import FavoritePage from 'Pages/Favorite/FavoritePage';
const Home = lazy(() => import('../Pages/Home/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayot />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<CarsPage />} />
        <Route path="favorites" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
