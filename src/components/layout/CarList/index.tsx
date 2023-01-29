import { useEffect, useState } from 'react';
import {
  Car,
  CarWithManModelName,
  Meta,
} from '../../../interface/car.interface';
import CarCard from '../../CarCard';
import Sort from '../../Sort';

interface CarListProps {
  cars: CarWithManModelName[];
  meta: Meta;
  sortHandler: (sortParams: { Period: string; SortOrder: number }) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, meta, sortHandler }) => {
  return (
    <>
      <Sort
        meta={meta}
        sortDataHandler={(sortParams: { Period: string; SortOrder: number }) =>
          sortHandler(sortParams)
        }
      />
      {cars.map((car) => (
        <CarCard key={car.car_id} car={car} />
      ))}
    </>
  );
};

export default CarList;
