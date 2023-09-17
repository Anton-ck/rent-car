import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardWrapper,
  ImgWrapper,
  CarImg,
  CarInfoWrapper,
  MainCarInfo,
  CarInfo,
  CarModel,
  CarAbout,
  SecondaryCarInfoWrapper,
  SecondaryCarInfo,
  SecondaryCarAbout,
  FavoriteIcon,
  HeartIcon,
  HeartIconBlue,
} from './CarCard.styled';
import { SharedButton as LearnMoreButton } from 'components/Buttons/SharedButton';
import {
  incrementToFavoriteList,
  decrementToFavoriteList,
} from 'redux/favorite/favoriteSlice';
import { getFavorite } from 'redux/favorite/favoriteSelectors';

import Modal from 'components/Modal/Modal';

const CarCard = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    return setShowModal(prevsetShowModal => !showModal);
  };

  console.log(make);

  const addressSlice = address.split(', ');
  const city = addressSlice[1];
  const country = addressSlice[2];

  const miliageToString = mileage.toString();
  const miliageAfterComma = miliageToString.slice(1, 4);
  const miliageUi = miliageToString[0] + ',' + miliageAfterComma;

  const firstFunctionality = functionalities[0];
  const favorites = useSelector(getFavorite);

  const followStatus = favorites.includes(id);
  const dispatch = useDispatch();

  const incrementFavorite = () => {
    dispatch(incrementToFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(decrementToFavoriteList(id));
  };

  return (
    <CardWrapper>
      <ImgWrapper>
        <CarImg src={img} alt={make} />
        <FavoriteIcon
          onClick={!followStatus ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {!followStatus ? <HeartIcon /> : <HeartIconBlue />}
        </FavoriteIcon>
      </ImgWrapper>

      <CarInfoWrapper>
        <MainCarInfo>
          <CarInfo>{make}</CarInfo>
          <CarModel>
            {model}
            <span style={{ color: 'black' }}>,</span>
          </CarModel>
          <CarInfo>{year}</CarInfo>
          <CarAbout>{rentalPrice}</CarAbout>
        </MainCarInfo>
        <SecondaryCarInfoWrapper>
          <SecondaryCarInfo>
            <SecondaryCarAbout>{city}</SecondaryCarAbout>
            <SecondaryCarAbout>{country}</SecondaryCarAbout>

            <SecondaryCarAbout>{rentalCompany}</SecondaryCarAbout>
          </SecondaryCarInfo>

          <SecondaryCarInfo>
            <SecondaryCarAbout>{type}</SecondaryCarAbout>
            <SecondaryCarAbout>{make}</SecondaryCarAbout>
            <SecondaryCarAbout>{miliageUi}</SecondaryCarAbout>
            <SecondaryCarAbout>{firstFunctionality}</SecondaryCarAbout>
          </SecondaryCarInfo>
        </SecondaryCarInfoWrapper>
        <LearnMoreButton
          onClick={toogleModal}
          textButton="Learn More"
          widthButton={274}
        />
      </CarInfoWrapper>
      {showModal && (
        <Modal
          key={id}
          model={model}
          make={make}
          year={year}
          rentalPrice={rentalPrice}
          address={address}
          rentalCompany={rentalCompany}
          functionalities={functionalities}
          id={id}
          type={type}
          img={img}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          description={description}
          accessories={accessories}
          rentalConditions={rentalConditions}
          mileage={mileage}
          onClose={toogleModal}
        />
      )}
    </CardWrapper>
  );
};

export default CarCard;
