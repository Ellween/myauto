import { useState } from 'react';
import { SortingDateData, SortingTimeData } from '../../data/cars';
import { Meta } from '../../interface/car.interface';
import {
  Orders,
  SortButton,
  SortButtonContainer,
  SortButtonDropdown,
  SortButtonDropdownItem,
  SortButtons,
  SortContainer,
  SpanIcon,
  SpanText,
} from './Sort.styled';

interface SortProps {
  meta: Meta;
  sortDataHandler: (sortParams: { Period: string; SortOrder: number }) => void;
}

const Sort: React.FC<SortProps> = ({ meta, sortDataHandler }) => {
  const [isOpenLastTime, setIsOpenLastTime] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [sortParams, setSortParams] = useState({
    Period: '',
    SortOrder: 0,
  });

  const sortHandler = (key: string | number) => {
    let newSortParams;
    if (typeof key === 'number') {
      newSortParams = { ...sortParams, SortOrder: key };
    } else {
      newSortParams = { ...sortParams, Period: key };
    }

    setSortParams(newSortParams);
    sortDataHandler(newSortParams);
  };

  const timeSortButtonHandler = () => {
    setIsOpenLastTime((prev) => !prev);
    setIsOpenDate(false);
  };

  const dateSortButtonHandler = () => {
    setIsOpenDate((prev) => !prev);
    setIsOpenLastTime(false);
  };

  return (
    <SortContainer>
      <Orders> {meta?.total} განცხადება</Orders>
      <SortButtons>
        <SortButtonContainer>
          <SortButton onClick={timeSortButtonHandler}>
            <SpanText>
              {sortParams.Period
                ? SortingTimeData[sortParams.Period]
                : 'პერიოდი'}
            </SpanText>
            <SpanIcon $isOpen={isOpenLastTime}>
              <svg className='fill-[#6F7383]' viewBox='0 0 20 20'>
                <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
              </svg>
            </SpanIcon>
          </SortButton>

          <SortButtonDropdown $isOpen={isOpenLastTime}>
            {Object.keys(SortingTimeData).map((key, index) => (
              <SortButtonDropdownItem
                key={key}
                onClick={() => sortHandler(key)}
              >
                {SortingTimeData[key]}
              </SortButtonDropdownItem>
            ))}
          </SortButtonDropdown>
        </SortButtonContainer>
        <SortButtonContainer>
          <SortButton onClick={dateSortButtonHandler}>
            <SpanText>
              {' '}
              {sortParams.SortOrder
                ? SortingDateData[sortParams.SortOrder]
                : 'თარიღი კლებადი'}
            </SpanText>
            <SpanIcon $isOpen={isOpenDate}>
              <svg className='fill-[#6F7383]' viewBox='0 0 20 20'>
                <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
              </svg>
            </SpanIcon>
          </SortButton>

          <SortButtonDropdown $isOpen={isOpenDate}>
            {Object.keys(SortingDateData).map((key, index) => (
              <SortButtonDropdownItem
                key={key}
                onClick={() => sortHandler(parseInt(key))}
              >
                {SortingDateData[parseInt(key)]}
              </SortButtonDropdownItem>
            ))}
          </SortButtonDropdown>
        </SortButtonContainer>
      </SortButtons>
    </SortContainer>
  );
};

export default Sort;
