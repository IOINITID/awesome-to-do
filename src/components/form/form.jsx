import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './form.css';

export default class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.onFormButtonClick = (evt) => {
      evt.preventDefault();

      this.props.onAdd(`Hello!`);
    };
  }

  render() {
    // const {onAdd} = this.props;

    return (
      <form className="form">
        <input type="text" className="form__input" placeholder="What should be done?" />
        <button className="form_button" onClick={this.onFormButtonClick}>Add</button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
};
