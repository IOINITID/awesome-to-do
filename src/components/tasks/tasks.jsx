import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task.jsx';

export default class Tasks extends Component {
  constructor() {
    super();
  }

  render() {
    const {itemsData, filterType, onDoneSwitch, onTaskFixed, onModalSwitch} = this.props;

    let tasksTitle;

    switch (filterType) {
      case `all`:
        tasksTitle = `Все задачи`;
        break;
      case `done`:
        tasksTitle = `Выполненные`;
        break;
      case `undone`:
        tasksTitle = `Текущие`;
        break;
      case `fixed`:
        tasksTitle = `Закреплённые`;
        break;
      default:
        tasksTitle = `Все задачи`;
        break;
    }

    return (
      <section className="tasks">
        <h2 className="tasks__title">{tasksTitle}</h2>
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
                  <Task id={id} title={title} done={done} fixed={fixed} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onModalSwitch={onModalSwitch} />
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
  onModalSwitch: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired
};
