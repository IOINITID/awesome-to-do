import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import NoTaskDarkIcon from '../../assets/images/no-task-dark-icon.svg';
import NoTaskLightIcon from '../../assets/images/no-task-light-icon.svg';
import NotFoundDarkIcon from '../../assets/images/not-found-dark-icon.svg';
import NotFoundLightIcon from '../../assets/images/not-found-light-icon.svg';

interface IInfo {
  theme: string;
  filterType: string;
  searching: boolean;
}

interface IInfoData {
  title: string;
  description: string;
}

const Info = (props: IInfo) => {
  const { theme, filterType, searching } = props;

  let infoData: IInfoData;

  switch (filterType) {
    case `all`:
      infoData = { title: `Все задачи`, description: `` };
      break;
    case `undone`:
      infoData = { title: `Текущие`, description: `активных` };
      break;
    case `done`:
      infoData = { title: `Выполненные`, description: `выполненных` };
      break;
    case `fixed`:
      infoData = { title: `Закреплённые`, description: `закреплённых` };
      break;
    default:
      infoData = { title: `Все задачи`, description: `` };
      break;
  }

  let infoClassName: string = searching ? `info info--search` : `info info--all`;

  return (
    <section className={infoClassName}>
      <h2 className="info__title">{searching ? `Поиск по задачам` : infoData.title}</h2>
      {searching ? (
        <Fragment>
          <p className="info__description">Совпадений не найдено</p>
          {theme === `dark` ? (
            <NotFoundDarkIcon className="info__icon" />
          ) : (
            <NotFoundLightIcon className="info__icon" />
          )}
        </Fragment>
      ) : (
        <Fragment>
          <p className="info__description">У Вас нет {infoData.description} задач</p>
          <p className="info__description">Добавьте задачу и она появится в этом списке</p>
          {theme === `dark` ? <NoTaskDarkIcon className="info__icon" /> : <NoTaskLightIcon className="info__icon" />}
        </Fragment>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    searching: state.searching,
    filterType: state.filterType,
  };
};

export default connect(mapStateToProps)(Info);
