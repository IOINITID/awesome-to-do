/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import Menu from '../menu/menu';
import Tasks from '../tasks/tasks';
import Greeting from '../greeting/greeting';
import Info from '../info/info';
import { connect } from 'react-redux';
import { onSearch, onFilter } from '../../utils/common';
import { selectWelcome, welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectMenu, menuSwitch } from '../../features/menu/menuSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import { selectSearchData } from '../../features/search/searchSlice';

interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}

interface IMain {
  itemsData: Array<IItemsData>;
}

const Main = (props: IMain) => {
  const { itemsData } = props;

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
    const menuElement: HTMLDivElement = document.querySelector('.menu');

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

const mapStateToProps = (state) => {
  return {
    itemsData: state.app.itemsData,
  };
};

export default connect(mapStateToProps, null)(Main);
