import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './item.css';

export default class Item extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      isDone: false
    };

    this.onItemTitleClick = () => {
      this.setState({
        isDone: true
      });
    };
  }

  render() {
    const {isDone} = this.state;
    const {title} = this.props;

    let itemClassName = isDone ? `item item--done` : `item`;

    return (
      <p className={itemClassName}>
        <span onClick={this.onItemTitleClick} className="item__title">{title}</span>
        <button className="item__delete">Delete</button>
        <button className="item__add">Add</button>
      </p>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired
};
