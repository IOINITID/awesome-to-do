import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item.jsx';

import './list.css';

export default class List extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {itemsData} = this.props;

    return (
      <ul className="list">
        {
          itemsData.map((item, index) => {
            const key = `${item}-${index}`;
            const {title} = item;

            return <Item key={key} title={title}/>;
          })
        }
      </ul>
    );
  }
}

List.propTypes = {
  itemsData: PropTypes.array.isRequired
};
