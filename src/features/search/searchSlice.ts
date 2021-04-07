import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface SearchState {
  value: boolean;
}

const initialState: SearchState = {
  value: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchSwitch: (state) => {
      state.value = !state.value;
    },
    searchClose: (state) => {
      state.value = false;
    },
  },
});

export const { searchSwitch, searchClose } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
