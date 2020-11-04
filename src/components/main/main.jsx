import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu.jsx';
import Tasks from '../tasks/tasks.jsx';
import Greeting from '../greeting/greeting.jsx';
import Info from '../info/info.jsx';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction, onWellcomeSwitchAction} from '../../actions/index.js';

const Main = (props) => {
  const onSearch = (itemsData) => {
    if (itemsData.length) {
      return itemsData.filter((item) => item.title.toLowerCase().indexOf(props.searchData.toLowerCase()) > -1);
    }

    return itemsData;
  };

  const onFilter = (itemsData, filterType) => {
    switch (filterType) {
      case `all`:
        return itemsData;
      case `done`:
        return itemsData.filter((item) => item.done);
      case `undone`:
        return itemsData.filter((item) => !item.done);
      case `fixed`:
        return itemsData.filter((item) => item.fixed);
      default:
        return itemsData;
    }
  };

  const {itemsData, wellcomeDefault, onModalSwitch, isMenuOpen, onMenuSwitch, searchData, filterType, onWellcomeSwitch} = props;

  const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);

  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;

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
        <Menu
          itemsQuantity={[itemsAll, itemsDone, itemsNotDone]}
          onModalSwitch={onModalSwitch}
        />
      </div>

      {
        itemsDataToShow.length ?
          <div className="container">
            <Tasks
              itemsData={itemsDataToShow}
              onModalSwitch={onModalSwitch}
            />
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
  onModalSwitch: PropTypes.func.isRequired,
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
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
    onWellcomeSwitch: () => dispatch(onWellcomeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
