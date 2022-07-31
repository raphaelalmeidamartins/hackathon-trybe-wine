import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'checkout',
  initialState: {
    data: 'light',
  },
  reducers: {
    setTheme(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
