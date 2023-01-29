import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarList from '../components/layout/CarList';
import SideBar from '../components/layout/SideBar';
import {
  Car,
  CarWithManModelName,
  Category,
  Mans,
  Meta,
  Models,
} from '../interface/car.interface';
import {
  fetchCars,
  FetchCarsQuery,
  fetchCats,
  fetchManId,
  fetchModels,
} from '../services/fetchCars';
import { setMansRedux } from '../store/manufacturer';
import { FilterState } from '../store/filter';
import { setCategoryRedux } from '../store/categories';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  const [cars, setCars] = useState<CarWithManModelName[]>([]);
  const [meta, setMeta] = useState<Meta>();
  const [mans, setMans] = useState<Mans[]>([]);
  const [sortParams, setSortParams] = useState({ Period: '', SortOrder: 0 });

  const dispatch = useDispatch();

  const { filter } = useSelector((state: any) => state);

  useEffect(() => {
    const fetchMans = async () => {
      const mansResponse: Mans[] = await fetchManId();
      const categoryResponse: Category[] = await fetchCats();

      setMans(mansResponse);
      dispatch(setMansRedux(mansResponse));
      dispatch(setCategoryRedux(categoryResponse));
    };
    fetchMans();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newQuery: FetchCarsQuery = {};

      if (filter.manufacturer?.length > 0 || filter.models?.length > 0) {
        if (filter.manufacturer?.length === 0 && filter.models?.length > 0) {
          newQuery.Mans = filter.models[0];
        } else if (
          filter.manufacturer?.length > 0 &&
          filter.models?.length > 0
        ) {
          newQuery.Mans = filter.manufacturer.concat(filter.models).join('-');
        } else {
          newQuery.Mans = filter.manufacturer.join('-');
        }
      }

      if (filter.category.length) {
        newQuery.Cats = filter.category.join('.');
      }

      if (filter.PriceFrom > 0) {
        newQuery.PriceFrom = filter.PriceFrom;
      }

      if (filter.PriceTo > 0) {
        newQuery.PriceTo = filter.PriceTo;
      }

      newQuery.Period = sortParams.Period;
      newQuery.SortOrder = sortParams.SortOrder;
      newQuery.ForRent = filter.sell;

      const carsResponse = await fetchCars(newQuery);
      if (carsResponse) {
        const carsWithMan: CarWithManModelName[] = await Promise.all(
          carsResponse.items.map(async (car: Car) => {
            const man = mans.find((man) => car.man_id == man.man_id);
            if (!man) {
              return car;
            }
            const modelsResponse: Models[] = await fetchModels({
              man_id: car.man_id,
            });

            const findModel = modelsResponse.find(
              (model) => model.model_id == car.model_id
            );

            if (!findModel) {
              return car;
            }

            return {
              ...car,
              man_name: man.man_name,
              model_name: findModel.model_name,
            };
          })
        );

        const carsWithManFiltered = carsWithMan.filter(
          (car) => car.vehicle_type === filter.vehicle_type
        );

        setCars(carsWithManFiltered);
        setMeta(carsResponse.meta);
      }
    };
    if (mans.length) {
      fetchData();
    }
  }, [mans, filter, sortParams]);

  const sortHandler = (sortParams: { Period: string; SortOrder: number }) => {
    setSortParams(sortParams);
  };

  return (
    <div className='flex justify-between w-full'>
      <div className='w-[250px] h-auto'>
        <SideBar meta={meta as any} />
      </div>
      <div className='w-[calc(100%_-_270px)] ml-[20px]'>
        <CarList cars={cars} meta={meta as any} sortHandler={sortHandler} />
      </div>
    </div>
  );
};

export default Homepage;
