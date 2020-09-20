import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item.jsx';

import './list.css';

export default class List extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {itemsData, onDelete} = this.props;

    return (
      <ul className="list">
        {
          itemsData.map((item) => {
            const {title} = item;

            return <Item key={item.id} title={title} onDelete={() => onDelete(item.id)}/>;
          })
        }
      </ul>
    );
  }
}

List.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};
