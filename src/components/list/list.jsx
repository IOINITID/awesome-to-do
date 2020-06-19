import React, {Component} from 'react';
import Item from '../item/item.jsx';

import './list.css';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="list">
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}
