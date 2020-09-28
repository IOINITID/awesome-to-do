import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task.jsx';

export default class Tasks extends Component {
  constructor() {
    super();
  }

  render() {
    const {itemsData, onDelete, onDone, onFixed} = this.props;

    return (
      <ul className="list">
        {
          itemsData.map((item) => {
            const {title, isDone, isFixed} = item;

            return <Task key={item.id} title={title} isDone={isDone} isFixed={isFixed} onDelete={() => onDelete(item.id)} onDone={() => onDone(item.id)} onFixed={() => onFixed(item.id)}/>;
          })
        }
      </ul>
    );
  }
}

Tasks.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  onFixed: PropTypes.func.isRequired
};
