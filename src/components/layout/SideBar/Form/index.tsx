import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Category,
  Mans,
  Meta,
  Models,
} from '../../../../interface/car.interface';
import { fetchModels } from '../../../../services/fetchCars';
import { setFilterRedux } from '../../../../store/filter';
import {
  Currency,
  CurrencyGel,
  CurrencyUsd,
  Form,
  FormDetails,
  FormInputDetails,
  PriceInputLabels,
  PriceInputs,
  PriceLabel,
  Separator,
  SubmitButton,
  SubmitButtonAppearance,
  SubmitButtonContainer,
} from './Form.styled';
import FormInputCategory from './FormInpus/FormInputCategory';
import FormInputManufacture from './FormInpus/FormInputManufacture';
import FormInputModels, { ModelFilter } from './FormInpus/FormInputModels';
import FormInputSell from './FormInpus/FormInputSell';

interface Props {
  manufacturer: Mans[];
  categories: Category[];
  meta: Meta;
}
interface Filter {
  sell: number;
  manufacturer: string[];
  models: string[];
  category: string[];
  PriceFrom: number;
  PriceTo: number;
}

const FormComponent: React.FC<Props> = ({ manufacturer, categories, meta }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  const [models, setModels] = useState<[Models[]]>([[]]);

  const [filter, setFilter] = useState<Filter>({
    sell: 0,
    manufacturer: [],
    category: [],
    models: [],
    PriceFrom: 0,
    PriceTo: 0,
  });

  const dispatch = useDispatch();

  const openDropDownHandler = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const selectedInputSell = (selected: number) => {
    setFilter((prev) => {
      return {
        ...prev,
        sell: selected,
      };
    });
  };

  const selectedInputsHandlerManufacture = async (selected: number[]) => {
    const modelsResponse: any = await Promise.all(
      selected.map((s) => {
        return fetchModels({ man_id: s });
      })
    );

    setModels(modelsResponse);

    setFilter((prev: any) => {
      return {
        ...prev,
        manufacturer: [...selected],
      };
    });
  };

  const selectedInputsHandlerModels = async (selected: ModelFilter) => {
    const newFilter = { ...filter };
    let newModels: string = '';

    const keyValueStrings = Object.entries(selected).map(([key, { value }]) => {
      if (filter.manufacturer.includes(key)) {
        newFilter.manufacturer = newFilter.manufacturer.filter(
          (m) => m !== key
        );
      }
      return `${key}.${value.join('.')}`;
    });
    newModels = keyValueStrings.join('-');

    newFilter.models = [newModels];

    setFilter(newFilter);
  };

  const selectedInputsHandlerCategory = (selected: number[]) => {
    setFilter((prev: any) => {
      return {
        ...prev,
        category: [...selected],
      };
    });
  };

  const priceFromChangeHandler = (e: any) => {
    setPriceFrom(e.target.value);

    setFilter((prev) => {
      return {
        ...prev,
        PriceFrom: e.target.value,
      };
    });
  };

  const priceToChangeHandler = (e: any) => {
    setPriceTo(e.target.value);

    setFilter((prev) => {
      return {
        ...prev,
        PriceTo: e.target.value,
      };
    });
  };

  const modelClickabel = filter.manufacturer.length > 0 ? true : false;

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setFilterRedux(filter as any));
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormDetails>
        <FormInputSell
          open={openIndex === 0}
          text='გარიგების ტიპი'
          data={categories}
          selectedInputs={selectedInputSell}
          openDropDownHandler={() => openDropDownHandler(0)}
          searchHandler={() => dispatch(setFilterRedux(filter as any))}
          onCloseBtn={() => setOpenIndex(-1)}
        />
        <FormInputManufacture
          open={openIndex === 1}
          text='მწარმოებელი'
          data={manufacturer}
          openDropDownHandler={() => openDropDownHandler(1)}
          selectedInputs={selectedInputsHandlerManufacture}
          searchHandler={() => dispatch(setFilterRedux(filter as any))}
          onCloseBtn={() => setOpenIndex(-1)}
        />
        <FormInputModels
          open={openIndex === 2 && modelClickabel}
          text='მოდელი'
          data={models}
          openDropDownHandler={() => openDropDownHandler(2)}
          selectedInputs={selectedInputsHandlerModels}
          searchHandler={() => dispatch(setFilterRedux(filter as any))}
          onCloseBtn={() => setOpenIndex(-1)}
        />
        <FormInputCategory
          open={openIndex === 3}
          text='კატეგორია'
          data={categories}
          openDropDownHandler={() => openDropDownHandler(3)}
          selectedInputs={selectedInputsHandlerCategory}
          searchHandler={() => dispatch(setFilterRedux(filter as any))}
          onCloseBtn={() => setOpenIndex(-1)}
        />
      </FormDetails>
      <Separator></Separator>
      <FormInputDetails>
        <PriceInputLabels className='flex justify-between'>
          <PriceLabel htmlFor=''>ფასი</PriceLabel>
          <Currency>
            <CurrencyGel>₾</CurrencyGel>
            <CurrencyUsd>$</CurrencyUsd>
          </Currency>
        </PriceInputLabels>
        <PriceInputLabels>
          <PriceInputs
            type='number'
            placeholder='დან'
            value={priceFrom}
            onChange={priceFromChangeHandler}
          />
          -
          <PriceInputs
            type='number'
            placeholder='მდე'
            value={priceTo}
            onChange={priceToChangeHandler}
          />
        </PriceInputLabels>
      </FormInputDetails>
      <SubmitButtonContainer>
        <SubmitButtonAppearance>
          <SubmitButton type='submit'>ძებნა {meta?.total}</SubmitButton>
        </SubmitButtonAppearance>
      </SubmitButtonContainer>
    </Form>
  );
};

export default FormComponent;
