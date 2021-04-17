import React, { memo, useEffect } from 'react';
import Task from '../task/task';
import i18n from 'i18next';
import { onSearch, onFilter } from '../../utils/common';
import { useTranslation } from 'react-i18next';
import { selectLanguage } from '../../features/language/languageSlice';
import { useSelectorTyped } from '../../hooks';
import { selectSearchData } from '../../features/search/searchSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import { selectTasks } from '../../features/tasks/tasksSlice';
import { StyledTasksList, StyledTasksTitle, StyledTasksItem } from './styled';

const Tasks = () => {
  const itemsData = useSelectorTyped(selectTasks);

  const { t } = useTranslation();

  const language = useSelectorTyped(selectLanguage);
  const searchData = useSelectorTyped(selectSearchData);
  const filterType = useSelectorTyped(selectFilter);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const itemsDataSorted = itemsData
    .slice()
    .sort((a: any, b: any) => b.fixed - a.fixed)
    .sort((a: any, b: any) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  let tasksTitle: string;

  switch (filterType) {
    case 'all':
      tasksTitle = t('menuAll');
      break;
    case 'done':
      tasksTitle = t('menuDone');
      break;
    case 'undone':
      tasksTitle = t('menuCurrent');
      break;
    case 'fixed':
      tasksTitle = t('menuFixed');
      break;
    default:
      tasksTitle = t('menuAll');
      break;
  }

  const taskItems = itemsDataToShow.map((item) => {
    const { id, value, done, fixed, more } = item;

    return (
      <StyledTasksItem key={id} done={done} fixed={fixed}>
        <Task id={id} value={value} done={done} fixed={fixed} more={more} />
      </StyledTasksItem>
    );
  });

  return (
    <section>
      <StyledTasksTitle>{tasksTitle}</StyledTasksTitle>
      <StyledTasksList>{taskItems}</StyledTasksList>
    </section>
  );
};

export default memo(Tasks);
