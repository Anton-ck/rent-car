import { CarsListWrapper, CarsList, CarsListItem } from './CarsList.styled';
import CarCard from 'components/CarCard/CarCard';
import { useSelector } from 'react-redux';
import { getCars, getIsLoading } from 'redux/cars/carsSelectors';
import { useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import LoadMoreBtn from 'components/Buttons/LoadMore';

const CarsCatalog = () => {
  const cars = useSelector(getCars);
  const isLoading = useSelector(getIsLoading);

  const [page, setPage] = useState(1);

  const cardsPerPage = 8;
  const paginatedCars = cars.slice(0, page * cardsPerPage);
  const totalPages = Math.ceil(cars.length / cardsPerPage);

  const getPage = () => setPage(page + 1);

  return (
    <CarsListWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <CarsList>
          {paginatedCars.map(car => (
            <CarsListItem key={car.id}>
              <CarCard {...car} />
            </CarsListItem>
          ))}
        </CarsList>
      )}
      {!isLoading ? (
        totalPages !== page && <LoadMoreBtn getPage={getPage} />
      ) : (
        <Loader />
      )}
    </CarsListWrapper>
  );
};

export default CarsCatalog;
