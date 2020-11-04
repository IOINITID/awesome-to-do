import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Modal from '../modal/modal.jsx';
import {connect} from 'react-redux';
import store from '../../store/index.js';
import {onModalSwitchAction, onTaskAddAction, onWellcomeSwitchAction} from '../../actions/index.js';

const App = (props) => {
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

  const {searchData, itemsData, filterType, isModalOpen, wellcomeDefault, onWellcomeSwitch} = props;

  const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);
  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;
  const localTheme = window.localStorage.getItem(`theme`) || `dark`;

  useEffect(() => {
    if (itemsAll) {
      onWellcomeSwitch();
    }
  }, []);

  return (
    <div className={`theme theme--${localTheme}`}>
      <Header />
      <Main
        wellcomeDefault={wellcomeDefault}
        itemsQuantity={[itemsAll, itemsDone, itemsNotDone]}
        itemsData={itemsDataToShow}
      />
      {
        isModalOpen && <Modal />
      }
    </div >
  );
};

store.subscribe(() => {
  window.localStorage.setItem(`theme`, store.getState().theme);
  window.localStorage.setItem(`itemsData`, JSON.stringify(store.getState().itemsData));
});

App.propTypes = {
  searchData: PropTypes.string.isRequired,
  wellcomeDefault: PropTypes.string.isRequired,
  onWellcomeSwitch: PropTypes.func.isRequired,
  itemsData: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    searchData: state.searchData,
    wellcomeDefault: state.wellcomeDefault,
    itemsData: state.itemsData,
    filterType: state.filterType,
    isModalOpen: state.isModalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWellcomeSwitch: () => dispatch(onWellcomeSwitchAction()),
    onTaskAdd: (title) => dispatch(onTaskAddAction(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
