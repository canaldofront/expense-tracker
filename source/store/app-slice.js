import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: null,
  transactions: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setTransactions(state, action) {
      state.transactions = action.payload;
    },
  },
});

export const { setCategories, setTransactions } = appSlice.actions;

export default appSlice.reducer;
