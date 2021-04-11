/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect } from 'react';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { selectLanguage, languageChange } from '../../features/language/languageSlice';
import { filterChange } from '../../features/filter/filterSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { selectTasks, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import Button from '../button';
import { StyledSwitch } from '../switch/styled';
import Switch from '../switch';

const Menu = () => {
  const itemsData = useSelectorTyped(selectTasks);

  const { t } = useTranslation();

  const itemsAll = itemsData.length;
  const itemsDone = itemsData.filter((item) => item.done).length;
  const itemsNotDone = itemsData.filter((item) => !item.done).length;

  const dispatch = useDispatchTyped();
  const isMenuOpen = useSelectorTyped(selectMenu);
  const language = useSelectorTyped(selectLanguage);

  const onFilterItemClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    const filterType = (evt.target as HTMLAnchorElement).dataset.type;

    dispatch(filterChange(filterType));
    dispatch(welcomeSwitch(false));
    dispatch(menuSwitch());
  };

  const onAddLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(tasksModalSwitch({ id: '', type: 'add' }));
    dispatch(menuSwitch());
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const menuClassName = isMenuOpen ? 'menu menu--active' : 'menu';

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
        <Switch
          style={{ margin: 'auto auto 0 0' }}
          active={language === 'ru'}
          onClick={() => dispatch(languageChange())}
        >
          {language === 'ru' ? <span>Eng</span> : <span>Ru</span>}
        </Switch>
      </ul>
    </section>
  );
};

export default memo(Menu);
