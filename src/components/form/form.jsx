import React, {Component} from 'react';

import './form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <input type="text" className="form__input" placeholder="What should be done?" />
        <button className="form_button">Add</button>
      </form>
    );
  }
}
