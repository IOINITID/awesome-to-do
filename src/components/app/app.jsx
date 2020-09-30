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
        {id: uuid(), title: `Покормить кошку`, done: false, fixed: false},
        // {id: uuid(), title: `Закрепленная задача`, done: false, fixed: true},
        // {id: uuid(), title: `Выполненная задача`, done: true, fixed: false}
      ],
      themeDefault: true,
      menuDefault: true,
      modalDefault: true,
      searchData: ``,
      modalType: ``,
      modalField: ``,
      currentId: ``
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
      const modalTask = this.state.itemsData.slice();

      const editedTask = modalTask.map((item) => {
        if (item.id === id) {
          item.title = title;
        }
      });

      return {
        itemsData: editedTask
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
  }

  render() {
    const {itemsData, themeDefault, menuDefault, modalDefault, searchData, modalType, modalField, currentId} = this.state;
    const itemsDataToShow = this.onSearch(itemsData, searchData);
    // const itemsDone = itemsData.filter((item) => item.done).length;
    // const itemsNotDone = itemsData.filter((item) => !item.done).length;
    const themeClassName = themeDefault ? `theme theme--dark` : `theme theme--light`;

    return (
      <div className={themeClassName}>
        <Header onSearchChange={this.onSearchChange} onThemeSwitch={this.onThemeSwitch} onMenuSwitch={this.onMenuSwitch} onModalSwitch={this.onModalSwitch}></Header>
        <Main itemsData={itemsDataToShow} menuDefault={menuDefault} onModalSwitch={this.onModalSwitch} onDoneSwitch={this.onDoneSwitch} onTaskFixed={this.onTaskFixed}></Main>
        {modalDefault ? null : <Modal currentId={currentId} modalType={modalType} modalField={modalField} onModalSwitch={this.onModalSwitch} onTaskAdd={this.onTaskAdd} onTaskEdit={this.onTaskEdit} onTaskDelete={this.onTaskDelete}></Modal>}
      </div >
    );
  }
}
