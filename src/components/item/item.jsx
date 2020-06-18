import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './item.css';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="item">
        <span>Item one...</span>
        <button>Del</button>
        <button>Add</button>
      </p>
    );
  }
}
