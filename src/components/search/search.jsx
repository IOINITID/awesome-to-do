import React, {Component} from 'react';

import './search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="search" type="search" placeholder="Type to search..." />
    );
  }
}
