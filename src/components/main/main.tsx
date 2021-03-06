/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import Menu from '../menu/menu';
import Tasks from '../tasks/tasks';
import Greeting from '../greeting/greeting';
import Info from '../info/info';
import { connect } from 'react-redux';
import { onMenuSwitchAction, onWelcomeSwitchAction } from '../../actions/index';
import { onSearch, onFilter } from '../../utils/common';

interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}

interface IMain {
  itemsData: Array<IItemsData>;
  isWelcome: boolean;
  isMenuOpen: boolean;
  onMenuSwitch: () => void;
  searchData: string;
  filterType: string;
  onWelcomeSwitch: () => void;
}

const Main = (props: IMain) => {
  const { itemsData, isWelcome, isMenuOpen, onMenuSwitch, searchData, filterType, onWelcomeSwitch } = props;

  const itemsDataSorted = itemsData
    .slice()
    .sort((a: any, b: any) => b.fixed - a.fixed)
    .sort((a: any, b: any) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  useEffect(() => {
    if (itemsData.length) {
      onWelcomeSwitch();
    }
  }, []);

  const onMainClick = (evt) => {
    const menuElement: HTMLDivElement = document.querySelector(`.menu`);

    if (isMenuOpen && !menuElement.contains(evt.target)) {
      onMenuSwitch();
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
    isMenuOpen: state.isMenuOpen,
    isWelcome: state.isWelcome,
    searchData: state.searchData,
    filterType: state.filterType,
    itemsData: state.itemsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onWelcomeSwitch: () => dispatch(onWelcomeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
