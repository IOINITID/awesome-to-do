import React, { memo } from 'react';
import Header from '../header';
import Main from '../main';
import Modal from '../modal';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { selectTheme } from '../../features/theme/themeSlice';
import { selectIsModalOpen } from '../../features/tasks/tasksSlice';
import { useSelectorTyped } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, StyledApp } from './styled';
import { resources } from '../../resources';

i18n.use(initReactI18next).init({
  resources: resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const theme = useSelectorTyped(selectTheme);
  const isModalOpen = useSelectorTyped(selectIsModalOpen);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Normalize />
      <GlobalStyles />
      <StyledApp>
        <Header />
        <Main />
        {isModalOpen && <Modal />}
      </StyledApp>
    </ThemeProvider>
  );
};

export default memo(App);
