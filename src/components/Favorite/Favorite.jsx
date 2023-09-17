import {
  CarsListWrapper,
  CarsList,
  CarsListItem,
} from '../CarsList/CarsList.styled';
import LoadMoreBtn from 'components/Buttons/LoadMore';
import CarCard from 'components/CarCard/CarCard';
import { getCars } from 'redux/cars/carsSelectors';
import { getFavorite } from 'redux/favorite/favoriteSelectors';

import { useSelector } from 'react-redux';
import { useState } from 'react';

const FavoritesCar = () => {
  const cars = useSelector(getCars);
  const favorites = useSelector(getFavorite);
  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  const [page, setPage] = useState(1);

  const cardsPerPage = 8;
  const paginatedCars = favoriteCars.slice(0, page * cardsPerPage);
  const totalPages = Math.ceil(favoriteCars.length / cardsPerPage);

  const getPage = () => setPage(page + 1);

  return (
    <CarsListWrapper>


      <CarsList>
        {paginatedCars.map(car => (
          <CarsListItem key={car.id}>
            <CarCard {...car} />
          </CarsListItem>
        ))}
      </CarsList>
      {totalPages !== page && <LoadMoreBtn getPage={getPage} />}
    </CarsListWrapper>
  );
};

export default FavoritesCar;
