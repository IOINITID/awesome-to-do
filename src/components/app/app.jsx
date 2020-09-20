import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import Header from '../header/header.jsx';
import Search from '../search/search.jsx';
import Filter from '../filter/filter.jsx';
import List from '../list/list.jsx';
import Form from '../form/form.jsx';

import './app.css';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      itemsData: [
        {title: `Дело номер один`, isDone: false, id: uuid()},
        {title: `Дело номер два`, isDone: false, id: uuid()},
        {title: `Дело номер три`, isDone: false, id: uuid()}
      ]
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
          id: uuid()
        };

        itemsData.push(itemData);

        return {
          itemsData
        };
      });
    };
  }

  render() {
    const {itemsData} = this.state;

    return (
      <div className="wrapper">
        <Header
          toDoQuantity={3}
          toDoDone={1}
        />
        <div className="search-and-filter">
          <Search />
          <Filter />
        </div>
        <List itemsData={itemsData} onDelete={this.onItemDelete}/>
        <Form onAdd={this.onItemAdd} />
      </div>
    );
  }
}
