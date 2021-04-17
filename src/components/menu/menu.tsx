/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect } from 'react';
import Switch from '../switch';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { selectLanguage, languageChange } from '../../features/language/languageSlice';
import { filterChange } from '../../features/filter/filterSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { selectTasks, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import {
  StyledMenu,
  StyledMenuItem,
  StyledMenuLink,
  StyledMenuLinkContainer,
  StyledMenuList,
  StyledMenuQuantity,
  StyledMenuContainer,
} from './styled';
import Icons from '../icons';

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

  const languageChangeHandler = () => dispatch(languageChange());

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <StyledMenu className="menu" active={isMenuOpen}>
      <StyledMenuContainer>
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
            <StyledMenuLink href="#" aria-label="Закреплённые." onClick={onFilterItemClick}>
              <StyledMenuLinkContainer data-type="fixed">
                <Icons.FixedIcon width="17px" height="17px" />
                {t('menuFixed')}
              </StyledMenuLinkContainer>
            </StyledMenuLink>
          </StyledMenuItem>
          <StyledMenuItem add>
            <StyledMenuLink href="#" aria-label="Добавить задачу." onClick={onAddLinkClick}>
              <StyledMenuLinkContainer>
                <Icons.AddIcon width="17px" height="17px" />
                {t('menuAdd')}
              </StyledMenuLinkContainer>
            </StyledMenuLink>
          </StyledMenuItem>
        </StyledMenuList>
        <Switch active={language === 'en'} onClick={languageChangeHandler}>
          {language === 'en' ? <span>Eng</span> : <span>Ru</span>}
        </Switch>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export default memo(Menu);
