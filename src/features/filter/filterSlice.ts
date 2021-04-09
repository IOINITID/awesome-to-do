import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface FilterState {
  type: string;
}

const initialState: FilterState = {
  type: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter.type;

export default filterSlice.reducer;
