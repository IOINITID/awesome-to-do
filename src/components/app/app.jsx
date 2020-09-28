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
        {title: `Дело номер один`, done: false, fixed: false, id: uuid()},
        {title: `Дело номер два`, done: false, fixed: false, id: uuid()},
        {title: `Дело номер три`, done: false, fixed: false, id: uuid()}
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

    // this.onItemDelete = (id) => {
    //   this.setState((state) => {
    //     const itemsData = state.itemsData.filter((item) => item.id !== id);

    //     return {
    //       itemsData
    //     };
    //   });
    // };

    // this.onTaskAdd = (description) => {
    //   this.setState((state) => {
    //     const itemsData = state.itemsData.slice();
    //     const itemData = {
    //       title: description,
    //       isDone: false,
    //       isFixed: false,
    //       id: uuid()
    //     };

    //     itemsData.push(itemData);

    //     return {
    //       itemsData,
    //     };
    //   });
    // };

    // this.onItemDone = (id) => {
    //   this.setState((state) => {
    //     const itemsData = state.itemsData.slice();

    //     itemsData.map((item) => {
    //       if (item.id === id) {
    //         item.isDone = !item.isDone;
    //       }
    //     });

    //     return {
    //       itemsData
    //     };
    //   });
    // };

    // this.onItemFixed = (id) => {
    //   this.setState((state) => {
    //     const itemsData = state.itemsData.slice();

    //     itemsData.map((item) => {
    //       if (item.id === id) {
    //         item.isFixed = !item.isFixed;
    //       }
    //     });

    //     return {
    //       itemsData
    //     };
    //   });
    // };
  }

  render() {
    const {themeDefault, menuDefault, modalDefault} = this.state;
    // const itemsDone = itemsData.filter((item) => item.done).length;
    // const itemsNotDone = itemsData.filter((item) => !item.done).length;
    const themeClassName = themeDefault ? `theme theme--dark` : `theme theme--light`;

    return (
      <div className={themeClassName}>
        <Header onThemeSwitch={this.onThemeSwitch} onMenuSwitch={this.onMenuSwitch} onModalSwitch={this.onModalSwitch}></Header>
        <Main menuDefault={menuDefault}></Main>
        {modalDefault ? null : <Modal onModalSwitch={this.onModalSwitch}></Modal>}
      </div >
    );
  }
}
