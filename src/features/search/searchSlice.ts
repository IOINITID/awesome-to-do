import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface SearchState {
  isSearchOpen: boolean;
  searchData: string;
}

const initialState: SearchState = {
  isSearchOpen: false,
  searchData: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchSwitch: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    searchClose: (state) => {
      state.isSearchOpen = false;
    },
    onSearchChange: (state, action: PayloadAction<string>) => {
      state.searchData = action.payload;
    },
  },
});

export const { searchSwitch, searchClose, onSearchChange } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.isSearchOpen;

export const selectSearchData = (state: RootState) => state.search.searchData;

export default searchSlice.reducer;
