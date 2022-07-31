import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    subscriptionPlan: 'annual',
    total: 0,
    totalWithDiscount: 0,
    discount: 0,
    totalDivided: 0,
  },
  reducers: {
    setSubscriptionPlan(state, action) {
      state.subscriptionPlan = action.payload;
    },
    setTotal(state) {
      state.total = state.subscriptionPlan === 'annual' ? 99.9 * 12 : 99.9;
      state.totalWithDiscount = state.subscriptionPlan === 'annual' ? 65.93 * 8 : 79.92;
      state.discount = state.subscriptionPlan === 'annual' ? 99.9 * 12 - 65.93 * 8 : 99.9 - 79.92;
      state.totalDivided = (state.subscriptionPlan === 'annual' ? 65.93 * 8 : 79.92) / 12;
    },
  },
});

export const { setSubscriptionPlan, setTotal } = checkoutSlice.actions;

export default checkoutSlice.reducer;
