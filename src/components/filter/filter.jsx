import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './filter.css';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.filterButtons = [
      {name: `all`, label: `All`},
      {name: `active`, label: `Active`},
      {name: `done`, label: `Done`}
    ];
  }

  render() {
    return (
      <div className="filter-buttons">
        {this.filterButtons.map((button, index) => {
          const {name, label} = button;

          return (
            <button key={`${name}-${index}`} className="button">{label}</button>
          );
        })}
      </div>
    );
  }
}
