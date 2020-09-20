import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './form.css';

export default class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      title: ``
    };

    this.onFormInputChange = (evt) => {
      this.setState({
        title: evt.target.value
      });
    };

    this.onFormSubmit = (evt) => {
      evt.preventDefault();

      this.props.onAdd(this.state.title);
    };
  }

  render() {
    // const {onAdd} = this.props;

    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <input type="text" className="form__input" onChange={this.onFormInputChange} placeholder="What should be done?" required/>
        <button className="form_button">Add</button>
      </form>
    );
  }
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired
};
