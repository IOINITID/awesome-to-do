import React, {Component} from 'react';

import './filter.css';

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filter-buttons">
        <button className="button">All</button>
        <button className="button">Active</button>
        <button className="button">Done</button>
      </div>
    );
  }
}
