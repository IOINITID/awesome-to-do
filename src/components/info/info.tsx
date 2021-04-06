import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import NoTaskDarkIcon from '../../assets/images/no-task-dark-icon.svg';
import NoTaskLightIcon from '../../assets/images/no-task-light-icon.svg';
import NotFoundDarkIcon from '../../assets/images/not-found-dark-icon.svg';
import NotFoundLightIcon from '../../assets/images/not-found-light-icon.svg';

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

interface IInfo {
  theme: string;
  filterType: string;
  searching: boolean;
  language: string;
}

interface IInfoData {
  title: string;
  description: string;
}

const Info = (props: IInfo) => {
  const { theme, filterType, searching, language } = props;

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  let infoData: IInfoData;

  switch (filterType) {
    case 'all':
      infoData = { title: t('Все задачи'), description: '' };
      break;
    case 'undone':
      infoData = { title: t('Текущие'), description: t('активных') };
      break;
    case 'done':
      infoData = { title: t('Выполненные'), description: t('выполненных') };
      break;
    case 'fixed':
      infoData = { title: t('Закреплённые'), description: t('закреплённых') };
      break;
    default:
      infoData = { title: t('Все задачи'), description: '' };
      break;
  }

  const infoClassName: string = searching ? `info info--search` : `info info--all`;

  return (
    <section className={infoClassName}>
      <h2 className="info__title">{searching ? t('Поиск по задачам') : infoData.title}</h2>
      {searching ? (
        <Fragment>
          <p className="info__description">{t('Совпадений не найдено')}</p>
          {theme === `dark` ? (
            <NotFoundDarkIcon className="info__icon" />
          ) : (
            <NotFoundLightIcon className="info__icon" />
          )}
        </Fragment>
      ) : (
        <Fragment>
          <p className="info__description">
            {t('У Вас нет')} {infoData.description} {t('задач')}
          </p>
          <p className="info__description">{t('Добавьте задачу и она появится в этом списке')}</p>
          {theme === `dark` ? <NoTaskDarkIcon className="info__icon" /> : <NoTaskLightIcon className="info__icon" />}
        </Fragment>
      )}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.value,
    searching: state.app.searching,
    filterType: state.app.filterType,
    language: state.app.language,
  };
};

export default connect(mapStateToProps)(Info);
