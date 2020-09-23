import React, {Component, Fragment} from 'react';
import {v4 as uuid} from 'uuid';
import Header from '../header/header.jsx';
import Main from '../main/main.jsx';
// import Filter from '../filter/filter.jsx';
// import List from '../list/list.jsx';
// import Form from '../form/form.jsx';

// import './app.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      itemsData: [
        {title: `Дело номер один`, isDone: false, isFixed: true, id: uuid()},
        {title: `Дело номер два`, isDone: false, isFixed: false, id: uuid()},
        {title: `Дело номер три`, isDone: true, isFixed: false, id: uuid()}
      ],
      isMenuOpen: false
    };

    this.onItemDelete = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.filter((item) => item.id !== id);

        return {
          itemsData
        };
      });
    };

    this.onItemAdd = (description) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();
        const itemData = {
          title: description,
          isDone: false,
          isFixed: false,
          id: uuid()
        };

        itemsData.push(itemData);

        return {
          itemsData
        };
      });
    };

    this.onItemDone = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();

        itemsData.map((item) => {
          if (item.id === id) {
            item.isDone = !item.isDone;
          }
        });

        return {
          itemsData
        };
      });
    };

    this.onItemFixed = (id) => {
      this.setState((state) => {
        const itemsData = state.itemsData.slice();

        itemsData.map((item) => {
          if (item.id === id) {
            item.isFixed = !item.isFixed;
          }
        });

        return {
          itemsData
        };
      });
    };

    this.onMenuClick = () => {
      this.setState((state) => {
        return {
          isMenuOpen: !state.isMenuOpen
        };
      });
    };
  }

  render() {
    const {itemsData, isMenuOpen} = this.state;
    // const itemsDone = itemsData.filter((item) => item.isDone).length;
    // const itemsNotDone = itemsData.filter((item) => !item.isDone).length;

    return (
      <Fragment>
        <Header onMenuClick={this.onMenuClick}></Header>
        <Main isMenuOpen={isMenuOpen} itemsData={itemsData} onDone={this.onItemDone} onDelete={this.onItemDelete}></Main>
      </Fragment>
      // <div className="wrapper">
      //   <Header
      //     toDoQuantity={itemsNotDone}
      //     toDoDone={itemsDone}
      //   />
      //   <div className="search-and-filter">
      //     <Search />
      //     <Filter />
      //   </div>
      //   <List itemsData={itemsData} onDelete={this.onItemDelete} onDone={this.onItemDone} onFixed={this.onItemFixed}/>
      //   <Form onAdd={this.onItemAdd} />
      // </div>
    );
  }
}
