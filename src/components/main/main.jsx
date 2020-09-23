import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import Task from '../task/task.jsx';

// import './main.css';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();
  }

  render() {
    const {itemsData, isMenuOpen, onDone} = this.props;

    let menuClassName = isMenuOpen ? `menu menu--active` : `menu`;

    return (
      <main className="main container">

        <section className={menuClassName}>
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#">Все задачи</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Текущие</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">Выполненные</a>
            </li>
            <li className="menu__item menu__item--fixed">
              <a className="menu__link" href="#">Закреплённые</a>
            </li>
            <li className="menu__item menu__item--add">
              <a className="menu__link" href="#">Добавить задачу</a>
            </li>
          </ul>
        </section>

        <section className="tasks">
          <h2 className="tasks__title">Все задачи</h2>
          <ul className="tasks__list">
            {
              itemsData.map((item) => {
                const {title, isDone, isFixed} = item;

                let tasksItemClassName;

                switch (true) {
                  case isDone:
                    tasksItemClassName = `tasks__item tasks__item--done`;
                    break;
                  case isFixed:
                    tasksItemClassName = `tasks__item tasks__item--fixed`;
                    break;
                  default:
                    tasksItemClassName = `tasks__item`;
                }

                return (
                  <li key={item.id} className={tasksItemClassName}>
                    <Task title={title} isDone={isDone} isFixed={isFixed} onDelete={() => onDelete(item.id)} onDone={() => onDone(item.id)} onFixed={() => onFixed(item.id)} />
                  </li>
                );
              })
            }
          </ul>
        </section>

      </main>
    );
  }
}

// Main.propTypes = {
//   isMenuOpen: PropTypes.bool.isRequired
// };
