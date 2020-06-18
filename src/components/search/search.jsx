import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="search" type="text" value="" placeholder="Type to search..." />
    );
  }
}
