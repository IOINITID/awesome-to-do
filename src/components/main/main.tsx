/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { memo, useEffect, useRef } from 'react';
import Menu from '../menu';
import Tasks from '../tasks/tasks';
import Greeting from '../greeting';
import Info from '../info/info';
import { onSearch, onFilter } from '../../utils/common';
import { selectWelcome, welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectMenu, menuSwitch } from '../../features/menu/menuSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import { selectSearchData } from '../../features/search/searchSlice';
import { selectTasks } from '../../features/tasks/tasksSlice';

const Main = () => {
  const itemsData = useSelectorTyped(selectTasks);

  const dispatch = useDispatchTyped();
  const isWelcome = useSelectorTyped(selectWelcome);
  const isMenuOpen = useSelectorTyped(selectMenu);
  const filterType = useSelectorTyped(selectFilter);
  const searchData = useSelectorTyped(selectSearchData);

  const itemsDataSorted = itemsData
    .slice()
    .sort((a: any, b: any) => b.fixed - a.fixed)
    .sort((a: any, b: any) => a.done - b.done);
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
    <main className="main" onClick={onMainClick}>
      <Menu />
      <div className="container">{itemsDataToShow.length ? <Tasks /> : noTasks}</div>
    </main>
  );
};

export default memo(Main);
