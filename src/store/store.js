import { configureStore } from '@reduxjs/toolkit';
import checkoutSlice from './checkout';
import subscriptionReducer from './subscription';

const store = configureStore({
  reducer: {
    checkout: checkoutSlice,
    subscription: subscriptionReducer,
  },
});

export default store;
