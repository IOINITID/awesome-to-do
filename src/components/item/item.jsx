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
      isDone: false,
      isFixed: false
    };

    this.onItemTitleClick = () => {
      this.setState((state) => {
        return {
          isDone: !state.isDone
        };
      });
    };

    this.onItemAddClick = () => {
      this.setState((state) => {
        return {
          isFixed: !state.isFixed
        };
      });
    };
  }

  render() {
    const {isDone, isFixed} = this.state;
    const {title, onDelete} = this.props;

    let itemClassName = isDone ? `item item--done` : `item`;
    let itemAddStyles = isFixed ? {fontWeight: 700} : {fontWeight: 400};

    return (
      <p className={itemClassName}>
        <span onClick={this.onItemTitleClick} className="item__title" style={itemAddStyles}>{title}</span>
        <button onClick={onDelete} className="item__delete">Delete</button>
        <button onClick={this.onItemAddClick} className="item__add">Add</button>
      </p>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};
