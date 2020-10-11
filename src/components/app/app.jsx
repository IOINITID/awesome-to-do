import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Modal from '../modal/modal.jsx';
import {connect} from 'react-redux';
import store from '../../store/index.js';
import {onWellcomeSwitchAction} from '../../actions/index.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      itemsData: [],
      modalDefault: true,
      modalType: ``,
      modalField: ``,
      currentId: ``,
      filterType: ``,
    };

    this.onModalSwitch = (id, type = `add`) => {
      const modalTask = this.state.itemsData.filter((item) => item.id === id);
      const [{title: modalField = ``} = {}] = modalTask;

      this.setState({
        currentId: id || ``
      });

      this.setState((state) => {
        return {
          modalDefault: !state.modalDefault,
          modalType: type,
          modalField
        };
      });
    };

    this.onDoneSwitch = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();

        itemsData.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
            item.fixed = false;
          }
        });

        return {
          itemsData
        };
      });
    };

    this.onTaskAdd = (title) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();
        const itemData = {
          id: uuid(),
          title,
          done: false,
          fixed: false
        };

        itemsData.push(itemData);


        return {
          itemsData
        };
      });

      this.props.onWellcomeSwitch();
    };

    this.onTaskEdit = (id, title) => {
      const modalTasks = this.state.itemsData.slice();

      const editedTasks = modalTasks.map((item) => {
        if (item.id === id) {
          item.title = title;
        }
      });

      return {
        itemsData: editedTasks
      };
    };

    this.onTaskFixed = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();

        itemsData.map((item) => {
          if (item.id === id) {
            item.fixed = !item.fixed;
          }
        });

        return {
          itemsData
        };
      });
    };

    this.onTaskDelete = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.filter((item) => item.id !== id);

        return {
          itemsData
        };
      });
    };

    this.onSearch = (itemsData) => {
      if (itemsData.length) {
        return itemsData.filter((item) => item.title.toLowerCase().indexOf(this.props.searchData.toLowerCase()) > -1);
      }

      return itemsData;
    };

    this.onFilter = (itemsData, filterType) => {
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

    this.onFilterChange = (filterType) => {
      this.setState({
        filterType
      });
    };
  }

  componentDidUpdate() {
    window.localStorage.setItem(`itemsData`, JSON.stringify(this.state.itemsData));
  }

  componentDidMount() {
    const localItemData = window.localStorage.getItem(`itemsData`);

    if (localItemData) {
      this.setState({
        itemsData: JSON.parse(localItemData)
      });
    }
  }

  render() {
    const {itemsData, modalDefault, modalType, modalField, currentId, filterType} = this.state;
    const {searchData} = this.props;

    const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
    const itemsDataToShow = this.onFilter(this.onSearch(itemsDataSorted, searchData), filterType);
    const itemsAll = itemsData.length;
    const itemsDone = itemsData.filter((item) => item.done).length;
    const itemsNotDone = itemsData.filter((item) => !item.done).length;

    const localTheme = window.localStorage.getItem(`themeDefault`) || `true`;
    const themeClassName = localTheme === `true` ? `theme theme--dark` : `theme theme--light`;

    return (
      <div className={themeClassName}>
        <Header onModalSwitch={this.onModalSwitch}></Header>
        <Main wellcomeDefault={this.props.wellcomeDefault} itemsQuantity={[itemsAll, itemsDone, itemsNotDone]} filterType={filterType} itemsData={itemsDataToShow} onFilterChange={this.onFilterChange} onModalSwitch={this.onModalSwitch} onDoneSwitch={this.onDoneSwitch} onTaskFixed={this.onTaskFixed}></Main>
        {modalDefault ? null : <Modal currentId={currentId} modalType={modalType} modalField={modalField} onModalSwitch={this.onModalSwitch} onTaskAdd={this.onTaskAdd} onTaskEdit={this.onTaskEdit} onTaskDelete={this.onTaskDelete}></Modal>}
      </div >
    );
  }
}

store.subscribe(() => {
  window.localStorage.setItem(`themeDefault`, store.getState().themeDefault);
  window.localStorage.setItem(`wellcomeDefault`, store.getState().wellcomeDefault);
});

App.propTypes = {
  searchData: PropTypes.string.isRequired,
  wellcomeDefault: PropTypes.string.isRequired,
  onWellcomeSwitch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    themeDefault: state.themeDefault,
    searchData: state.searchData,
    wellcomeDefault: state.wellcomeDefault
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWellcomeSwitch: () => dispatch(onWellcomeSwitchAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
