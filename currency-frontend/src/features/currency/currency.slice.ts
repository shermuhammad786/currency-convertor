import { createSlice } from '@reduxjs/toolkit';
import type{  PayloadAction } from '@reduxjs/toolkit';
import type { CurrencyResult } from './currency.types';

interface CurrencyState {
  loading: boolean;
  result: CurrencyResult | null;
  history: CurrencyResult[];
}

const initialState: CurrencyState = {
  loading: false,
  result: null,
  history: JSON.parse(localStorage.getItem('currency_history') || '[]'),
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    setResult(state, action: PayloadAction<CurrencyResult>) {
      state.loading = false;
      state.result = action.payload;
      state.history.unshift(action.payload);
      localStorage.setItem('currency_history', JSON.stringify(state.history));
    },
  },
});

export const { startLoading, setResult } = currencySlice.actions;
export default currencySlice.reducer;
