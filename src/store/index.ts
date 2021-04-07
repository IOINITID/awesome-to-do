import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../reducers/index';
import themeReducer from '../features/theme/themeSlice';
import menuReducer from '../features/menu/menuSlice';
import searchReducer from '../features/search/searchSlice';
import welcomeReducer from '../features/welcome/welcomeSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    theme: themeReducer,
    menu: menuReducer,
    search: searchReducer,
    welcome: welcomeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
