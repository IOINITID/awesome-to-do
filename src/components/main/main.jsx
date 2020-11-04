import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';
import Greeting from '../greeting/greeting.jsx';
import Info from '../info/info.jsx';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onWelcomeSwitchAction} from '../../actions/index.js';
import {onSearch, onFilter} from '../../utils/common.js';

const Main = (props) => {
  const {itemsData, isWelcome, isMenuOpen, onMenuSwitch, searchData, filterType, onWelcomeSwitch} = props;

  const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  useEffect(() => {
    if (itemsData.length) {
      onWelcomeSwitch();
    }
  }, []);

  const onMainClick = (evt) => {
    const menuElement = document.querySelector(`.menu`);

    if (isMenuOpen && !menuElement.contains(evt.target)) {
      onMenuSwitch();
    }
  };

  const noTasks = isWelcome ? <Greeting /> : <Info />;

  return (
    <main className="main" onClick={onMainClick}>
      <Menu />
      {itemsDataToShow.length ? <Tasks /> : noTasks}
    </main>
  );
};

Main.propTypes = {
  itemsData: PropTypes.array.isRequired,
  isWelcome: PropTypes.bool.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  searchData: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
  onWelcomeSwitch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen,
    isWelcome: state.isWelcome,
    searchData: state.searchData,
    filterType: state.filterType,
    itemsData: state.itemsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onWelcomeSwitch: () => dispatch(onWelcomeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
