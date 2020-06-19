import React, {Component} from 'react';

import './item.css';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="item">
        <span className="item__title">Something to do...</span>
        <button className="item__delete">Delete</button>
        <button className="item__add">Add</button>
      </p>
    );
  }
}
