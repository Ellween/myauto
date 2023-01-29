import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  sell: number;
  manufacturer: string[];
  category: string[];
  PriceFrom: number;
  PriceTo: number;
  models: string[];

  vehicle_type: number;
}

const initialState: FilterState = {
  sell: 0,
  manufacturer: [],
  category: [],
  models: [],
  PriceFrom: 0,
  PriceTo: 0,
  vehicle_type: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterRedux: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category;
      state.manufacturer = action.payload.manufacturer;
      state.PriceFrom = action.payload.PriceFrom;
      state.PriceTo = action.payload.PriceTo;
      state.sell = action.payload.sell;
      state.vehicle_type = action.payload.vehicle_type ?? 0;
      state.models = action.payload.models;
    },
  },
});

export const { setFilterRedux } = filterSlice.actions;

export default filterSlice.reducer;
