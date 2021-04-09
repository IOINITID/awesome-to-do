import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import Main from '../main/main';
import Modal from '../modal/modal';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { selectTheme } from '../../features/theme/themeSlice';
import { useSelectorTyped } from '../../hooks';

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

interface IApp {
  isModalOpen: boolean;
}

const App = (props: IApp) => {
  const { isModalOpen } = props;

  const theme = useSelectorTyped(selectTheme);

  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      <Main />
      {isModalOpen && <Modal />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.app.isModalOpen,
  };
};

export default connect(mapStateToProps, null)(App);
