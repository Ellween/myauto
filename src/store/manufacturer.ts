import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Mans } from '../interface/car.interface';

export interface MansInterface {
  manufacturer: Mans[];
}

const initialState: MansInterface = {
  manufacturer: [],
};

const mansSlice = createSlice({
  name: 'manufacturer',
  initialState,
  reducers: {
    setMansRedux: (state, action: PayloadAction<Mans[]>) => {
      state.manufacturer = action.payload;
    },
  },
});

export const { setMansRedux } = mansSlice.actions;

export default mansSlice.reducer;
