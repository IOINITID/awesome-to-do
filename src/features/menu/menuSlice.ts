import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface MenuState {
  value: boolean;
}

const initialState: MenuState = {
  value: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuSwitch: (state) => {
      state.value = !state.value;
    },
  },
});

export const { menuSwitch } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.value;

export default menuSlice.reducer;
