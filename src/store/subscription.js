import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSubscriptionData = createAsyncThunk(
  'subscription/fetchData',
  async () => {
    const response = await fetch('https://wine-club-proxy.herokuapp.com/modalities');
    const [data] = await response.json();
    return data;
  },
);

const subscription = createSlice({
  name: 'users',
  initialState: {
    data: {},
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubscriptionData.fulfilled, (state, action) => action.payload);
  },
});

export default subscription.reducer;
