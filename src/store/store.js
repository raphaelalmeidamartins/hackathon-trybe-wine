import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer from './subscription';

const store = configureStore({
  reducer: {
    // stock: stockReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
