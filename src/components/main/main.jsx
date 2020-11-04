import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';
import Greeting from '../greeting/greeting.jsx';
import Info from '../info/info.jsx';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onWellcomeSwitchAction} from '../../actions/index.js';
import {onSearch, onFilter} from '../../utils/common.js';

const Main = (props) => {
  const {itemsData, wellcomeDefault, isMenuOpen, onMenuSwitch, searchData, filterType, onWellcomeSwitch} = props;

  const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  useEffect(() => {
    if (itemsData.length) {
      onWellcomeSwitch();
    }
  }, []);

  const getNoTasksComponent = () => {
    switch (wellcomeDefault) {
      case `true`:
        return <Greeting />;
      case `false`:
        return <Info />;
      default:
        return <Greeting />;
    }
  };

  const onMainClick = (evt) => {
    const menuElement = document.querySelector(`.menu`);

    if (isMenuOpen && !menuElement.contains(evt.target)) {
      onMenuSwitch();
    }
  };

  return (
    <main className="main" onClick={onMainClick}>

      <div className="container">
        <Menu />
      </div>

      {
        itemsDataToShow.length ?
          <div className="container">
            <Tasks />
          </div> :
          <div className="container">
            {getNoTasksComponent()}
          </div>
      }

    </main>
  );
};

Main.propTypes = {
  itemsData: PropTypes.array.isRequired,
  wellcomeDefault: PropTypes.string.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  searchData: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired,
  onWellcomeSwitch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen,
    wellcomeDefault: state.wellcomeDefault,
    searchData: state.searchData,
    filterType: state.filterType,
    itemsData: state.itemsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onWellcomeSwitch: () => dispatch(onWellcomeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
