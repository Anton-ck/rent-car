import CarsCatalog from 'components/CarsList/CarsList';
import FilterName from 'components/Filter/Filter';

import { fetchCars } from 'redux/cars/carsOperations';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCars, getError, getIsLoading } from 'redux/cars/carsSelectors';

const CarsPage = () => {
  // const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
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
