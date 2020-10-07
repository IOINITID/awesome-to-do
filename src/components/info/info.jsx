import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Info extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {filterType, searching} = this.props;

    const getInfoData = () => {
      switch (filterType) {
        case `all`:
          return {title: `Все задачи`, description: ``};
        case `undone`:
          return {title: `Текущие`, description: `активных`};
        case `done`:
          return {title: `Выполненные`, description: `выполненных`};
        case `fixed`:
          return {title: `Закреплённые`, description: `закреплённых`};
        default:
          return {title: `Все задачи`, description: ``};
      }
    };

    const infoData = getInfoData();

    return (
      <section className="info info--all">
        <h2 className="info__title">{searching ? `Поиск по задачам` : infoData.title}</h2>
        {
          searching ? <p className="info__description">Совпадений не найдено</p> :
            <Fragment>
              <p className="info__description">У Вас нет {infoData.description} задач</p>
              <p className="info__description">Добавьте задачу и она появится в этом списке</p>
            </Fragment>
        }
        <img className="info__image info__image--dark" src="./img/info-all-dark-icon.svg" width="523" height="488" alt="Человек добавляет задачу." />
        <img className="info__image info__image--light" src="./img/info-all-light-icon.svg" width="523" height="488" alt="Человек добавляет задачу." />
      </section>
    );
  }
}

Info.propTypes = {
  filterType: PropTypes.string.isRequired
};
