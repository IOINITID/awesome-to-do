import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import './main.css';

export default class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();
  }

  render() {
    const {isMenuOpen} = this.props;

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
      </main>
    );
  }
}

Main.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired
};
