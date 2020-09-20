import React, {Component} from 'react';
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
        {title: `Дело номер один`, isDone: false, id: 1},
        {title: `Дело номер два`, isDone: false, id: 2},
        {title: `Дело номер три`, isDone: false, id: 3}
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
        <Form />
      </div>
    );
  }
}
