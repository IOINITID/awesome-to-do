import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item.jsx';

import './list.css';

export default class List extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {itemsData, onDelete, onDone, onFixed} = this.props;

    return (
      <ul className="list">
        {
          itemsData.map((item) => {
            const {title, isDone, isFixed} = item;

            return <Item key={item.id} title={title} isDone={isDone} isFixed={isFixed} onDelete={() => onDelete(item.id)} onDone={() => onDone(item.id)} onFixed={() => onFixed(item.id)}/>;
          })
        }
      </ul>
    );
  }
}

List.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  onFixed: PropTypes.func.isRequired
};
