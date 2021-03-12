/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  onMenuSwitchAction,
  onFilterChangeAction,
  onModalSwitchAction,
  onLanguageChangeAction,
  onWelcomeSwitchAction,
} from '../../actions/index';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}

interface IMenu {
  isMenuOpen: boolean;
  onModalSwitch: () => void;
  onMenuSwitch: () => void;
  onFilterChange: (firstArg: string) => void;
  itemsData: Array<IItemsData>;
  language: string;
  onLanguageChange: () => void;
  onWelcomeSwitch: () => void;
}

const Menu = (props: IMenu) => {
  const {
    itemsData,
    isMenuOpen,
    onModalSwitch,
    onMenuSwitch,
    onFilterChange,
    language,
    onLanguageChange,
    onWelcomeSwitch,
  } = props;

  const { t } = useTranslation();

  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;

  const onFilterItemClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const filterType: string = (evt.target as HTMLAnchorElement).dataset.type;

    onFilterChange(filterType);
    onMenuSwitch();
    onWelcomeSwitch();
  };

  const onAddLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    onModalSwitch();
    onMenuSwitch();
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const menuClassName = isMenuOpen ? `menu menu--active` : `menu`;

  return (
    <section className={menuClassName}>
      <ul className="menu__list">
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="all" aria-label="Все задачи." onClick={onFilterItemClick}>
            {t('Все задачи')}
            <sup className="menu__quantity">{itemsAll}</sup>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="undone" aria-label="Текущие." onClick={onFilterItemClick}>
            {t('Текущие')}
            <sup className="menu__quantity">{itemsNotDone}</sup>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#" data-type="done" aria-label="Выполненные." onClick={onFilterItemClick}>
            {t('Выполненные')}
            <sup className="menu__quantity">{itemsDone}</sup>
          </a>
        </li>
        <li className="menu__item menu__item--fixed">
          <a className="menu__link" href="#" data-type="fixed" aria-label="Закреплённые." onClick={onFilterItemClick}>
            <FixedIcon className="menu__icon" width="17" height="17" />
            {t('Закреплённые')}
          </a>
        </li>
        <li className="menu__item menu__item--add">
          <a className="menu__link" href="#" aria-label="Добавить задачу." onClick={onAddLinkClick}>
            <AddIcon className="menu__icon" width="17" height="17" />
            {t('Добавить задачу')}
          </a>
        </li>

        <div
          className={`switch lang ${language === 'ru' ? 'lang--ru' : 'lang--eng'}`}
          onClick={() => {
            onLanguageChange();
          }}
        >
          <button className="button lang__button" aria-label="Переключить язык.">
            {language === 'ru' ? <span>Ru</span> : <span>Eng</span>}
          </button>
          <span className="lang__eng">{language === 'ru' ? 'Eng' : 'Ru'}</span>
        </div>
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen,
    itemsData: state.itemsData,
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onFilterChange: (filterType) => dispatch(onFilterChangeAction(filterType)),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
    onLanguageChange: () => dispatch(onLanguageChangeAction()),
    onWelcomeSwitch: () => dispatch(onWelcomeSwitchAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
