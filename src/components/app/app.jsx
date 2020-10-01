import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
import Modal from '../modal/modal.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      itemsData: [
        // {id: uuid(), title: `Покормить кошку`, done: false, fixed: false},
        // {id: uuid(), title: `Закрепленная задача`, done: false, fixed: true},
        // {id: uuid(), title: `Выполненная задача`, done: true, fixed: false}
      ],
      themeDefault: true,
      menuDefault: true,
      modalDefault: true,
      searchData: ``,
      modalType: ``,
      modalField: ``,
      currentId: ``,
      filterType: ``
    };

    this.onThemeSwitch = () => {
      this.setState((state) => {
        return {
          themeDefault: !state.themeDefault
        };
      });
    };

    this.onMenuSwitch = () => {
      this.setState((state) => {
        return {
          menuDefault: !state.menuDefault
        };
      });
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

    this.onSearch = (itemsData, searchData) => {
      if (itemsData.length) {
        return itemsData.filter((item) => item.title.toLowerCase().indexOf(searchData.toLowerCase()) > -1);
      }

      return itemsData;
    };

    this.onSearchChange = (searchData) => {
      this.setState({
        searchData
      });
    };

    this.onFilter = (itemsData, filterType) => {
      switch (filterType) {
        case `all`:
          return itemsData;
        case `done`:
          return itemsData.filter((item) => item.done);
        case `undone`:
          return itemsData.filter((item) => !item.done);
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
    const {itemsData, themeDefault, menuDefault, modalDefault, searchData, modalType, modalField, currentId, filterType} = this.state;
    const itemsDataSorted = itemsData.slice().sort((a, b) => b.fixed - a.fixed).sort((a, b) => a.done - b.done);
    const itemsDataToShow = this.onFilter(this.onSearch(itemsDataSorted, searchData), filterType);
    const themeClassName = themeDefault ? `theme theme--dark` : `theme theme--light`;

    return (
      <div className={themeClassName}>
        <Header onSearchChange={this.onSearchChange} onThemeSwitch={this.onThemeSwitch} onMenuSwitch={this.onMenuSwitch} onModalSwitch={this.onModalSwitch}></Header>
        <Main itemsData={itemsDataToShow} onMenuSwitch={this.onMenuSwitch} onFilterChange={this.onFilterChange} menuDefault={menuDefault} onModalSwitch={this.onModalSwitch} onDoneSwitch={this.onDoneSwitch} onTaskFixed={this.onTaskFixed}></Main>
        {modalDefault ? null : <Modal currentId={currentId} modalType={modalType} modalField={modalField} onModalSwitch={this.onModalSwitch} onTaskAdd={this.onTaskAdd} onTaskEdit={this.onTaskEdit} onTaskDelete={this.onTaskDelete}></Modal>}
      </div >
    );
  }
}
