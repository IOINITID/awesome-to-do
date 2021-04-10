import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import menuReducer from '../features/menu/menuSlice';
import searchReducer from '../features/search/searchSlice';
import welcomeReducer from '../features/welcome/welcomeSlice';
import languageReducer from '../features/language/languageSlice';
import filterReducer from '../features/filter/filterSlice';
import tasksReducer from '../features/tasks/tasksSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    search: searchReducer,
    welcome: welcomeReducer,
    language: languageReducer,
    filter: filterReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
