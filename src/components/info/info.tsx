import React, { Fragment, memo, useEffect } from 'react';
import NoTaskDarkIcon from '../../assets/images/no-task-dark-icon.svg';
import NoTaskLightIcon from '../../assets/images/no-task-light-icon.svg';
import NotFoundDarkIcon from '../../assets/images/not-found-dark-icon.svg';
import NotFoundLightIcon from '../../assets/images/not-found-light-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectSearching } from '../../features/search/searchSlice';
import { useSelectorTyped } from '../../hooks';
import { selectTheme } from '../../features/theme/themeSlice';
import { selectLanguage } from '../../features/language/languageSlice';
import { selectFilter } from '../../features/filter/filterSlice';
import { StyledInfo, StyledInfoDescription, StyledTitle } from './styled';

interface IInfoData {
  title: string;
  description: string;
}

const Info = () => {
  const { t } = useTranslation();

  const searching = useSelectorTyped(selectSearching);
  const theme = useSelectorTyped(selectTheme);
  const language = useSelectorTyped(selectLanguage);
  const filterType = useSelectorTyped(selectFilter);

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

  return (
    <StyledInfo>
      <StyledTitle>{searching ? t('Поиск по задачам') : infoData.title}</StyledTitle>
      {searching ? (
        <Fragment>
          <StyledInfoDescription>{t('Совпадений не найдено')}</StyledInfoDescription>
          {theme === 'dark' ? (
            <NotFoundDarkIcon className="info__icon" />
          ) : (
            <NotFoundLightIcon className="info__icon" />
          )}
        </Fragment>
      ) : (
        <Fragment>
          <StyledInfoDescription>
            {t('У Вас нет')} {infoData.description} {t('задач')}
          </StyledInfoDescription>
          <StyledInfoDescription>{t('Добавьте задачу и она появится в этом списке')}</StyledInfoDescription>
          {theme === 'dark' ? <NoTaskDarkIcon className="info__icon" /> : <NoTaskLightIcon className="info__icon" />}
        </Fragment>
      )}
    </StyledInfo>
  );
};

export default memo(Info);
