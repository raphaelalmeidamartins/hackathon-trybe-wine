import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from './checkout';
import subscriptionReducer from './subscription';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    subscription: subscriptionReducer,
  },
});

export default store;
