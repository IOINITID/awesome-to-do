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
        {id: uuid(), title: `Закрепленная задача`, done: false, fixed: true},
        {id: uuid(), title: `Выполненная задача`, done: true, fixed: false}
      ],
      themeDefault: true,
      menuDefault: true,
      modalDefault: true
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

    this.onModalSwitch = () => {
      this.setState((state) => {
        return {
          modalDefault: !state.modalDefault
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
  }

  render() {
    const {itemsData, themeDefault, menuDefault, modalDefault} = this.state;
    // const itemsDone = itemsData.filter((item) => item.done).length;
    // const itemsNotDone = itemsData.filter((item) => !item.done).length;
    const themeClassName = themeDefault ? `theme theme--dark` : `theme theme--light`;

    return (
      <div className={themeClassName}>
        <Header onThemeSwitch={this.onThemeSwitch} onMenuSwitch={this.onMenuSwitch} onModalSwitch={this.onModalSwitch}></Header>
        <Main itemsData={itemsData} menuDefault={menuDefault} onDoneSwitch={this.onDoneSwitch} onTaskFixed={this.onTaskFixed} onTaskDelete={this.onTaskDelete}></Main>
        {modalDefault ? null : <Modal onModalSwitch={this.onModalSwitch} onTaskAdd={this.onTaskAdd}></Modal>}
      </div >
    );
  }
}
