import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {toDoQuantity, toDoDone} = this.props;

    return (
      <div className="header">
        <h1>Awesome To-Do</h1>
        <p>{toDoQuantity} more to do, {toDoDone} is done</p>
      </div>
    );
  }
}

Header.propTypes = {
  toDoQuantity: PropTypes.number.isRequired,
  toDoDone: PropTypes.number.isRequired
};
