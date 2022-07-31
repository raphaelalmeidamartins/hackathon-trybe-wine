import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    subscriptionPlan: '',
  },
  reducers: {
    setSubscriptionPlan(state, action) {
      state.subscriptionPlan = action.payload;
    },
  },
});

export const { setSubscriptionPlan } = checkoutSlice.actions;

export default checkoutSlice.reducer;
