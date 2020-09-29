import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class Greeting extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="greeting">
        <div className="greeting__info">
          <h2 className="greeting__title">Awesome to do</h2>
          <p className="greeting__description">Ваш личный помощник<br /> в организации списка задач</p>
        </div>
        <img className="greeting__image greeting__image--dark" src="./img/greeting-dark-icon.svg" alt="Человек заполняет список дел." />
        <img className="greeting__image greeting__image--light" src="./img/greeting-light-icon.svg" alt="Человек заполняет список дел." />
      </section>
    );
  }
}

// Greeting.propTypes = {};
