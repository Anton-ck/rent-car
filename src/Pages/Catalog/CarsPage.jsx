import CarsCatalog from 'components/CarsList/CarsList';

import { fetchCars } from 'redux/cars/carsOperations';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const CarsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <CarsCatalog />
      {/* {contacts.length === 0 && !error && !isLoading && (
        <b style={{ display: 'flex', justifyContent: 'center', color: 'red' }}>
          You don't have any contact yet
        </b>
      )}
      {contacts.length !== 0 && <FilterName />}

      {isLoading && !error && (
        <b style={{ display: 'flex', justifyContent: 'center' }}>
          Request in progress...
        </b>
      )} */}

      {/* {error && (
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontStyle: 'italic',
          }}
        >
          Oops, something went wrong. Please try again!
        </span>
      )} */}
    </>
  );
};

export default CarsPage;
