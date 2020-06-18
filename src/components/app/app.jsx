import React, {Component} from 'react';
import Header from '../header/header.jsx';
import Search from '../search/search.jsx';
import Filter from '../filter/filter.jsx';
import List from '../list/list.jsx';
import Form from '../form/form.jsx';

import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <List />
        <Form />
      </div>
    );
  }
}
