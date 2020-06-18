import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <input type="text" placeholder="What should be done?" />
        <button>Add</button>
      </form>
    );
  }
}
