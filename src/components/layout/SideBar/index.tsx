import FormComponent from '../SideBar/Form/index';
import { SideBarFilter, SidebarHeader } from './Sidebar.styled';
import HeaderImgComp from './HeaderImg';
import { useState } from 'react';

import car from '../../../assets/car.svg';
import tractor from '../../../assets/tractor.svg';
import moto from '../../../assets/moto.svg';
import { Mans, Meta } from '../../../interface/car.interface';
import { useDispatch, useSelector } from 'react-redux';
import { MansInterface } from '../../../store/manufacturer';
import { Categories } from '../../../store/categories';
import { markChanged } from 'immer/dist/internal';
import { FilterState, setFilterRedux } from '../../../store/filter';

interface Props {
  meta: Meta;
}

const SideBar: React.FC<Props> = ({ meta }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const HeaderImg = [
    { src: car, type: 'is_car', vehicle_type: 0 },
    { src: tractor, middle: true, type: 'is_spec', vehicle_type: 1 },
    { src: moto, type: 'is_moto', vehicle_type: 2 },
  ];
  const dispatch = useDispatch();
  const { filter } = useSelector((state: any) => state);

  const { manufacturer }: { manufacturer: Mans[] } = useSelector(
    (state: any) => state.manufacturer
  );
  const { categories } = useSelector((state: any) => state.categories);

  const setActiveIndexHandler = (index: number) => {
    setActiveIndex(index);
    dispatch(
      setFilterRedux({ ...filter, vehicle_type: HeaderImg[index].vehicle_type })
    );
  };

  return (
    <SideBarFilter>
      <SidebarHeader>
        {HeaderImg.map((item, index) => (
          <HeaderImgComp
            key={index}
            svg={item.src}
            middle={item.middle}
            active={activeIndex === index}
            onClick={() => setActiveIndexHandler(index)}
          />
        ))}
      </SidebarHeader>
      <FormComponent
        manufacturer={manufacturer.filter(
          (man: any) => man[HeaderImg[activeIndex].type] == 1
        )}
        categories={categories}
        meta={meta}
      />
    </SideBarFilter>
  );
};

export default SideBar;
