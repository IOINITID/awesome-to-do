import React, { memo } from 'react';
import Header from '../header';
import Main from '../main/main';
import Modal from '../modal/modal';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { selectTheme } from '../../features/theme/themeSlice';
import { useSelectorTyped } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import { selectIsModalOpen } from '../../features/tasks/tasksSlice';
import { createGlobalStyle } from 'styled-components';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        'Все задачи': 'Все задачи',
        Текущие: 'Текущие',
        Выполненные: 'Выполненные',
        Закреплённые: 'Закреплённые',
        'Добавить задачу': 'Добавить задачу',
        'Поиск по задачам': 'Поиск по задачам',
        'Ваш личный помощник': 'Ваш личный помощник',
        'в организации списка задач': 'в организации списка задач',
        'Совпадений не найдено': 'Совпадений не найдено',
        активных: 'активных',
        выполненных: 'выполненных',
        закреплённых: 'закреплённых',
        'У Вас нет': 'У Вас нет',
        задач: 'задач',
        'Добавьте задачу и она появится в этом списке': 'Добавьте задачу и она появится в этом списке',
        'Редактировать задачу': 'Редактировать задачу',
        'Удалить задачу': 'Удалить задачу',
        Невыполненное: 'Невыполненное',
        Редактировать: 'Редактировать',
        Удалить: 'Удалить',
        Открепить: 'Открепить',
        Закрепить: 'Закрепить',
        'Введите новую задачу': 'Введите новую задачу',
      },
    },
    en: {
      translation: {
        'Все задачи': 'All tasks',
        Текущие: 'Current',
        Выполненные: 'Done',
        Закреплённые: 'Fixed',
        'Добавить задачу': 'Add task',
        'Поиск по задачам': 'Search by tasks',
        'Ваш личный помощник': 'Your personal assistant',
        'в организации списка задач': 'in organizing the task list',
        'Совпадений не найдено': 'No matches found',
        активных: 'active',
        выполненных: 'done',
        закреплённых: 'fixed',
        'У Вас нет': 'You do not have',
        задач: 'tasks',
        'Добавьте задачу и она появится в этом списке': 'Add a task and it will appear in this list',
        'Редактировать задачу': 'Edit task',
        'Удалить задачу': 'Delete task',
        Невыполненное: 'Undone',
        Редактировать: 'Edit',
        Удалить: 'Delete',
        Открепить: 'Unfixed',
        Закрепить: 'Fixed',
        'Введите новую задачу': 'Enter a new task',
      },
    },
  },
  lng: 'ru',
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
});

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  height: 100%;
}

body {
  height: 100%;
  font-weight: 400;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  scroll-behavior: smooth;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
}

.theme--dark .overlay {
  background: rgba(252, 252, 252, 0.3);
}

.theme--light .overlay {
  background: rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 40px;
}

.container--flex {
  display: flex;
  align-items: center;
}

.root {
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .container {
    max-width: 768px;
    padding: 0 30px;
  }
}

@keyframes checkShow {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.greeting__image .check-1 {
  opacity: 0;
  animation: checkShow 1s ease-in-out 0s forwards;
}

.greeting__image .check-2 {
  opacity: 0;
  animation: checkShow 1s ease-in-out 1s forwards;
}

.greeting__image .check-3 {
  opacity: 0;
  animation: checkShow 1s ease-in-out 2s forwards;
}
`;

const App = () => {
  const theme = useSelectorTyped(selectTheme);
  const isModalOpen = useSelectorTyped(selectIsModalOpen);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <div className={`theme theme--${theme}`}>
        <Header />
        <Main />
        {isModalOpen && <Modal />}
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default memo(App);
