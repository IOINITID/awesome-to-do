import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: window.localStorage.getItem('language') || 'ru',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languageChange: (state) => {
      state.value === 'en' ? 'ru' : 'en';
    },
  },
});

export const { languageChange } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language.value;

export default languageSlice.reducer;
