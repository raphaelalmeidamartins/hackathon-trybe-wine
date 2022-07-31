import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    subscriptionPlan: 'annual',
    address: {},
  },
  reducers: {
    setSubscriptionPlan(state, action) {
      state.subscriptionPlan = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
  },
});

export const { setSubscriptionPlan, setAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
