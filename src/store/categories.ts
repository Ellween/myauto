import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../interface/car.interface';

export interface Categories {
  categories: Category[];
}

const initialState: Categories = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoryRedux: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategoryRedux } = categorySlice.actions;

export default categorySlice.reducer;
