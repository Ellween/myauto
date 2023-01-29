import { useState } from 'react';
import { Models } from '../../../../../interface/car.interface';
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
  data: [Models[]];
  openDropDownHandler: () => void;
  selectedInputs: (selected: ModelFilter) => void;
  searchHandler: () => void;
  onCloseBtn: () => void;
}

export interface ModelFilter {
  [man_id: number]: { value: number[] };
}

const FormInputModels: React.FC<Props> = ({
  text,
  data,
  open,
  openDropDownHandler,
  selectedInputs,
  searchHandler,
  onCloseBtn,
}) => {
  const [searchBtn, setSearchBtn] = useState(false);
  const [filter, setFilter] = useState<ModelFilter>({});

  const toggleCheckbox = (id: number, man_id: number) => {
    let newFilter: { [man_id: number]: { value: number[] } } = {
      ...filter,
    };

    if (!newFilter.hasOwnProperty(man_id)) {
      newFilter = { ...newFilter, [man_id]: { value: [id] } };
    } else {
      if (!newFilter[man_id].value.includes(id)) {
        newFilter = {
          ...newFilter,
          [man_id]: {
            value: newFilter[man_id].value
              ? newFilter[man_id].value.concat(id)
              : [id],
          },
        };
      }
    }

    selectedInputs(newFilter);
    setFilter(newFilter);
  };

  const getFilterValues = (): string[] => {
    let values: string[] = [];
    Object.values(filter).forEach((val) => {
      data.map((item) => {
        item.forEach((model) => {
          if (val.value.includes(model.model_id)) {
            values.push(model.model_name);
          }
        });
      });
    });

    return values;
  };

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
          {getFilterValues().length
            ? getFilterValues().join(',')
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
            {data?.map((item: Models[], index: number) =>
              item.map((item: Models) => (
                <InputAlign key={item.model_id}>
                  <DropdownItem
                    type='checkbox'
                    checked={getFilterValues().includes(item.model_name)}
                    onChange={() => toggleCheckbox(item.model_id, item.man_id)}
                  />
                  <InputName>{item.model_name}</InputName>
                </InputAlign>
              ))
            )}
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

export default FormInputModels;
