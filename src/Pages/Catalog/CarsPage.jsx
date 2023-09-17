import CarsCatalog from 'components/CarsList/CarsList';

import { fetchCars } from 'redux/cars/carsOperations';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getIsLoading } from 'redux/cars/carsSelectors';

import { Loader } from 'components/Loader/Loader';

const CarsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return <>{!getIsLoading ? <Loader /> : <CarsCatalog />}</>;
};

export default CarsPage;
