import { configureStore } from '@reduxjs/toolkit';
import categories from './categories';
import filter from './filter';
import manufacturer from './manufacturer';

const store = configureStore({
  reducer: { filter, manufacturer, categories },
});

export default store;
