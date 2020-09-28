import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task.jsx';

export default class Tasks extends Component {
  constructor() {
    super();
  }

  render() {
    const {itemsData, onDoneSwitch, onTaskFixed, onTaskDelete} = this.props;

    return (
      <section className="tasks">
        <h2 className="tasks__title">Все задачи</h2>
        <ul className="tasks__list">
          {
            itemsData.map((item) => {
              const {id, title, done, fixed} = item;

              let tasksItemClassName;

              switch (true) {
                case fixed:
                  tasksItemClassName = `tasks__item tasks__item--fixed`;
                  break;
                case done:
                  tasksItemClassName = `tasks__item tasks__item--done`;
                  break;
                default:
                  tasksItemClassName = `tasks__item`;
                  break;
              }

              return (
                <li key={id} className={tasksItemClassName}>
                  <Task id={id} title={title} done={done} fixed={fixed} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onTaskDelete={onTaskDelete} />
                </li>
              );
            })
          }
        </ul>
      </section>
    );
  }
}

Tasks.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onDoneSwitch: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired
};
