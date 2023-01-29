import axios, { AxiosRequestConfig } from 'axios';
import { MY_AUTO_MANS_JSON, MY_AUTO_URL } from '../constants/myAutoURL';

export interface FetchCarsQuery {
  ForRent?: number;
  Mans?: string;
  Cats?: string;
  PriceFrom?: number;
  PriceTo?: number;
  Period?: string;
  SortOrder?: number;
}

interface FetchModelsQuery {
  man_id: number;
}

export const fetchCars = async (query: FetchCarsQuery) => {
  const { ForRent, Mans, Cats, PriceFrom, PriceTo, Period, SortOrder } = query;

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ForRent,
      Mans,
      Cats,
      PriceFrom,
      PriceTo,
      Period,
      SortOrder,
    },
  };

  try {
    const response = await axios.get(`${MY_AUTO_URL}/products`, config);

    return response.data?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchModels = async (query: FetchModelsQuery) => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: query,
  };

  try {
    const response = await axios.get(`${MY_AUTO_URL}/getManModels`, config);

    return response?.data?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchManId = async () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(MY_AUTO_MANS_JSON, config);

    return response?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchCats = async () => {
  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(`${MY_AUTO_URL}/cats/get`, config);

    return response?.data?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
