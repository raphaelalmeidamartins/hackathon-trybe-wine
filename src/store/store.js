import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './stock';

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export default store;
