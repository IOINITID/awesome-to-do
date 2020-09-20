import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './item.css';

export default class Item extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();
  }

  render() {
    const {title, isDone, isFixed, onDelete, onDone, onFixed} = this.props;

    let itemClassName = isDone ? `item item--done` : `item`;
    let itemAddStyles = isFixed ? {fontWeight: 700} : {fontWeight: 400};

    return (
      <p className={itemClassName}>
        <span onClick={onDone} className="item__title" style={itemAddStyles}>{title}</span>
        <button onClick={onDelete} className="item__delete">Delete</button>
        <button onClick={onFixed} className="item__add">Add</button>
      </p>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  onFixed: PropTypes.func.isRequired
};
