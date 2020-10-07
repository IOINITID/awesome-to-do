import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Info extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <section className="info info--all">
        <h2 className="info__title">Все задачи</h2>
        <p className="info__description">У Вас нет активных задач</p>
        <p className="info__description">Добавьте задачу и она появится в этом списке</p>
        <img className="info__image info__image--dark" src="./img/info-all-dark-icon.svg" width="523" height="488" alt="Человек добавляет задачу." />
        <img className="info__image info__image--light" src="./img/info-all-light-icon.svg" width="523" height="488" alt="Человек добавляет задачу." />
      </section>
    );
  }
}
