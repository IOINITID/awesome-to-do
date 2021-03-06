/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useEffect } from 'react';
import Menu from '../menu';
import Tasks from '../tasks';
import Greeting from '../greeting';
import Info from '../info';
import { onSearch, onFilter } from '../../utils/common';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectWelcome, welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { selectMenu, menuSwitch } from '../../features/menu/menuSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import { selectSearchData } from '../../features/search/searchSlice';
import { selectTasks, ITask } from '../../features/tasks/tasksSlice';
import { StyledMain, StyledMainContainer } from './styled';

const Main = () => {
  const dispatch = useDispatchTyped();
  const itemsData = useSelectorTyped(selectTasks);
  const isWelcome = useSelectorTyped(selectWelcome);
  const isMenuOpen = useSelectorTyped(selectMenu);
  const filterType = useSelectorTyped(selectFilter);
  const searchData = useSelectorTyped(selectSearchData);

  const itemsDataSorted = itemsData
    .slice()
    .sort((a: ITask, b: ITask) => (b.fixed as any) - (a.fixed as any))
    .sort((a: ITask, b: ITask) => (a.done as any) - (b.done as any));

  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  useEffect(() => {
    if (itemsData.length) {
      dispatch(welcomeSwitch(false));
    }
  }, []);

  const onMainClick = (evt) => {
    const menuElement = document.querySelector('.menu');

    if (isMenuOpen && !menuElement.contains(evt.target)) {
      dispatch(menuSwitch());
    }
  };

  const noTasks: React.ReactElement = isWelcome ? <Greeting /> : <Info />;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <StyledMain className="main" onClick={onMainClick}>
      <Menu />
      <StyledMainContainer>{itemsDataToShow.length ? <Tasks /> : noTasks}</StyledMainContainer>
    </StyledMain>
  );
};

export default memo(Main);
