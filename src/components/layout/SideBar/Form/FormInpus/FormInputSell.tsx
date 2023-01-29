import { useState } from 'react';
import { Category, Mans } from '../../../../../interface/car.interface';
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
  data: Mans[] | Category[];
  openDropDownHandler: () => void;
  searchHandler: () => void;
  selectedInputs: (selected: number) => void;
  onCloseBtn: () => void;
}

const FormInputSell: React.FC<Props> = ({
  text,
  data,
  open,
  openDropDownHandler,
  selectedInputs,
  searchHandler,
  onCloseBtn,
}) => {
  const [searchBtn, setSearchBtn] = useState(false);
  const [filter, setFilter] = useState<number>(0);

  const toggleCheckbox = (id: number) => {
    setSearchBtn(true);
    setFilter(id);
    selectedInputs(id);
  };

  const clearFilter = () => {
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
        <SpanText>{filter === 0 ? 'იყიდება' : 'ქირავდება'}</SpanText>
        <SpanIcon $isOpen={open}>
          <svg className='fill-[#6F7383]' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </SpanIcon>
      </FormInput>
      <div className='relative'>
        <Dropdown $active={open}>
          <DropDownList>
            <InputAlign key={0}>
              <DropdownItem
                type='checkbox'
                checked={filter === 0}
                onChange={() => toggleCheckbox(0)}
              />

              <InputName>იყიდება</InputName>
            </InputAlign>
            <InputAlign key={1}>
              <DropdownItem
                type='checkbox'
                checked={filter === 1}
                onChange={() => toggleCheckbox(1)}
              />

              <InputName>ქირავდება</InputName>
            </InputAlign>
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

export default FormInputSell;
