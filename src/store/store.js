import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from './checkout';
import subscriptionReducer from './subscription';
import themeReducer from './theme';

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    subscription: subscriptionReducer,
    theme: themeReducer,
  },
});

export default store;
