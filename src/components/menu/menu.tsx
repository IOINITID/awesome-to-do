/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect } from 'react';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';
import Switch from '../switch';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { selectLanguage, languageChange } from '../../features/language/languageSlice';
import { filterChange } from '../../features/filter/filterSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { selectTasks, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import { StyledMenu, StyledMenuItem, StyledMenuLink, StyledMenuList, StyledMenuQuantity } from './styled';

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

  return (
    <StyledMenu className="menu" active={isMenuOpen}>
      <StyledMenuList>
        <StyledMenuItem>
          <StyledMenuLink href="#" data-type="all" aria-label="Все задачи." onClick={onFilterItemClick}>
            {t('menuAll')}
            <StyledMenuQuantity>{itemsAll}</StyledMenuQuantity>
          </StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="#" data-type="undone" aria-label="Текущие." onClick={onFilterItemClick}>
            {t('menuCurrent')}
            <StyledMenuQuantity>{itemsNotDone}</StyledMenuQuantity>
          </StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledMenuLink href="#" data-type="done" aria-label="Выполненные." onClick={onFilterItemClick}>
            {t('menuDone')}
            <StyledMenuQuantity>{itemsDone}</StyledMenuQuantity>
          </StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem fixed>
          <StyledMenuLink href="#" data-type="fixed" aria-label="Закреплённые." onClick={onFilterItemClick}>
            <FixedIcon className="menu__icon" width="17" height="17" />
            {t('menuFixed')}
          </StyledMenuLink>
        </StyledMenuItem>
        <StyledMenuItem add>
          <StyledMenuLink href="#" aria-label="Добавить задачу." onClick={onAddLinkClick}>
            <AddIcon className="menu__icon" width="17" height="17" />
            {t('menuAdd')}
          </StyledMenuLink>
        </StyledMenuItem>
        <Switch
          style={{ margin: 'auto auto 0 0' }}
          active={language === 'ru'}
          onClick={() => dispatch(languageChange())}
        >
          {language === 'ru' ? <span>Eng</span> : <span>Ru</span>}
        </Switch>
      </StyledMenuList>
    </StyledMenu>
  );
};

export default memo(Menu);
