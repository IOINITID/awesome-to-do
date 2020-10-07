import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Info extends Component {
  constructor() {
    super();
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

    let infoClassName = searching ? `info info--search` : `info info--all`;

    return (
      <section className={infoClassName}>
        <h2 className="info__title">{searching ? `Поиск по задачам` : infoData.title}</h2>
        {
          searching ? <p className="info__description">Совпадений не найдено</p> :
            <Fragment>
              <p className="info__description">У Вас нет {infoData.description} задач</p>
              <p className="info__description">Добавьте задачу и она появится в этом списке</p>
            </Fragment>
        }
      </section>
    );
  }
}

Info.propTypes = {
  filterType: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired
};
