import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface WelcomeState {
  value: boolean;
}

const initialState: WelcomeState = {
  value: true,
};

export const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    welcomeSwitch: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { welcomeSwitch } = welcomeSlice.actions;

export const selectWelcome = (state: RootState) => state.welcome.value;

export default welcomeSlice.reducer;
