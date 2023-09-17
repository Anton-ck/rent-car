import FavoritesCar from 'components/Favorite/Favorite';

import { fetchCars } from 'redux/cars/carsOperations';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <FavoritesCar />
    </>
  );
};

export default FavoritePage;
