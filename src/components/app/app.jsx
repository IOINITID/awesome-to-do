import React from 'react';
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

  const {searchData, itemsData, filterType, currentId, modalDefault, modalType, modalField, onModalSwitch, wellcomeDefault} = props;

  const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
  const itemsDataToShow = onFilter(onSearch(itemsDataSorted, searchData), filterType);
  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;
  const localTheme = window.localStorage.getItem(`themeDefault`) || `true`;
  const themeClassName = localTheme === `true` ? `theme theme--dark` : `theme theme--light`;

  return (
    <div className={themeClassName}>
      <Header />
      <Main wellcomeDefault={wellcomeDefault} itemsQuantity={[itemsAll, itemsDone, itemsNotDone]} itemsData={itemsDataToShow} onModalSwitch={onModalSwitch}></Main>
      {modalDefault ? null : <Modal currentId={currentId} modalType={modalType} modalField={modalField} onModalSwitch={onModalSwitch} />}
    </div >
  );
};

store.subscribe(() => {
  window.localStorage.setItem(`themeDefault`, store.getState().themeDefault);
  window.localStorage.setItem(`wellcomeDefault`, store.getState().wellcomeDefault);
  window.localStorage.setItem(`itemsData`, JSON.stringify(store.getState().itemsData));
});

App.propTypes = {
  searchData: PropTypes.string.isRequired,
  wellcomeDefault: PropTypes.string.isRequired,
  onWellcomeSwitch: PropTypes.func.isRequired,
  itemsData: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  currentId: PropTypes.string.isRequired,
  modalDefault: PropTypes.bool.isRequired,
  modalType: PropTypes.string.isRequired,
  modalField: PropTypes.string.isRequired,
  onModalSwitch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    themeDefault: state.themeDefault,
    searchData: state.searchData,
    wellcomeDefault: state.wellcomeDefault,
    itemsData: state.itemsData,
    filterType: state.filterType,
    currentId: state.currentId,
    modalDefault: state.modalDefault,
    modalType: state.modalType,
    modalField: state.modalField
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWellcomeSwitch: () => dispatch(onWellcomeSwitchAction()),
    onTaskAdd: (title) => dispatch(onTaskAddAction(title)),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
