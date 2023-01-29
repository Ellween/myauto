import React from 'react';
import { CarWithManModelName } from '../../interface/car.interface';
import {
  Inner__container,
  Inner__container__description,
  Inner__container__img,
} from './CarCard.styled';
import CarDescription from './CardDescription';

interface CarCardProps {
  car: CarWithManModelName;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className='container'>
      <Inner__container>
        <Inner__container__img>
          <img
            className='w-full h-full object-fill-cover'
            src={`https://static.my.ge/myauto/photos/${car.photo}/thumbs/${car.car_id}_1.jpg?v=${car.photo_ver}`}
            alt='car'
          />
        </Inner__container__img>
        <CarDescription car={car} />
      </Inner__container>
    </div>
  );
};

export default CarCard;
