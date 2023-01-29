import { useState } from 'react';
import { Category, Mans } from '../../../../../interface/car.interface';
import { setFilterRedux } from '../../../../../store/filter';
import FilterCard from '../../../../FilterCard';
import {
  Dropdown,
  DropdownItem,
  DropDownList,
  FormDetailsLabel,
  FormInput,
  FormInputDetails,
  InputAlign,
  InputName,
  SearchBtn,
  SearchBtnText,
  SearchText,
  SpanIcon,
  SpanText,
} from '../Form.styled';

interface Props {
  text: string;
  open: boolean;
  data: Mans[];
  openDropDownHandler: () => void;
  selectedInputs: (selected: number[]) => void;
  searchHandler: () => void;
  onCloseBtn: () => void;
}

const FormInputManufacture: React.FC<Props> = ({
  text,
  data,
  open,
  openDropDownHandler,
  selectedInputs,
  searchHandler,
  onCloseBtn,
}) => {
  const [searchBtn, setSearchBtn] = useState(false);
  const [filter, setFilter] = useState<number[]>([]);

  const toggleCheckbox = (id: number) => {
    const newFilter = [...filter];

    const index = newFilter.indexOf(id);
    if (!newFilter?.length) {
      setSearchBtn((prev) => !prev);
    }
    if (index === -1) {
      newFilter.push(id);
    } else {
      newFilter.splice(index, 1);
    }

    selectedInputs(newFilter);
    setFilter(newFilter);
  };

  const selectedValuesText = filter.map((id) => {
    const match = data.find((item) => item.man_id === id);
    return match ? match.man_name : null;
  });

  const clearFilter = () => {
    setFilter([]);
    selectedInputs([]);
    setSearchBtn((prev) => !prev);
  };

  const sendFilter = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onCloseBtn();
    searchHandler();
  };

  return (
    <FormInputDetails>
      <FormDetailsLabel>{text}</FormDetailsLabel>
      <FormInput onClick={() => openDropDownHandler()}>
        <SpanText>
          {selectedValuesText?.length
            ? selectedValuesText.join(',')
            : 'ყველა მწარმოებელი'}
        </SpanText>
        <SpanIcon $isOpen={open}>
          <svg className='fill-[#6F7383]' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </SpanIcon>
      </FormInput>
      <div className='relative'>
        <Dropdown $active={open}>
          <DropDownList>
            {data?.map((item: Mans) => (
              <InputAlign key={item.man_id}>
                <DropdownItem
                  type='checkbox'
                  checked={filter.includes(item.man_id)}
                  onChange={() => toggleCheckbox(item.man_id)}
                />

                <InputName>{item.man_name}</InputName>
              </InputAlign>
            ))}
          </DropDownList>
          {searchBtn && (
            <SearchBtnText>
              <SearchText onClick={clearFilter}>ფილტრის გასუფთავება</SearchText>
              <SearchBtn onClick={sendFilter}>არჩევა</SearchBtn>
            </SearchBtnText>
          )}
        </Dropdown>
      </div>
    </FormInputDetails>
  );
};

export default FormInputManufacture;
