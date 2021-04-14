/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createRef, Fragment, memo, RefObject, useEffect } from 'react';
import UndoneIcon from '../../assets/images/undone-icon.svg';
import EditIcon from '../../assets/images/edit-icon.svg';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import DeleteIcon from '../../assets/images/delete-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectLanguage } from '../../features/language/languageSlice';
import { doneTask, fixedTask, taskMoreClose, taskMoreSwitch, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import { StyledMore, StyledMoreItem, StyledMoreLink, StyledMoreList } from './styled';

interface IMore {
  id: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
}

const More = (props: IMore) => {
  const { id, done, fixed, more } = props;
  const { t } = useTranslation();

  const language = useSelectorTyped(selectLanguage);
  const dispatch = useDispatchTyped();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const moreElement: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  const onUndoneLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    dispatch(doneTask(id));
    dispatch(taskMoreSwitch());
  };

  const onEditLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    const modalType: string = (evt.target as HTMLAnchorElement).dataset.type;
    dispatch(taskMoreSwitch());
    dispatch(tasksModalSwitch({ id: id, type: modalType }));
  };

  const onFixedLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    dispatch(fixedTask(id));
    dispatch(taskMoreSwitch());
  };

  const onDeleteLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    const modalType: string = (evt.target as HTMLAnchorElement).dataset.type;

    dispatch(taskMoreSwitch());
    dispatch(tasksModalSwitch({ id: id, type: modalType }));
  };

  const onMoreCloseClick = (evt): void => {
    if (more && moreElement.current && !moreElement.current.contains(evt.target)) {
      dispatch(taskMoreClose());
    }
  };

  useEffect(() => {
    if (more) {
      document.addEventListener('click', onMoreCloseClick);
    }

    return () => document.removeEventListener('click', onMoreCloseClick);
  }, [more]);

  return (
    <StyledMore active={more} ref={moreElement}>
      <StyledMoreList>
        {done ? (
          <StyledMoreItem className="more__item more__item--undone">
            <StyledMoreLink className="more__link" href="#" onClick={onUndoneLinkClick}>
              <UndoneIcon className="more__icon" width="14" height="10" />
              {t('Невыполненное')}
            </StyledMoreLink>
          </StyledMoreItem>
        ) : (
          <Fragment>
            <StyledMoreItem className="more__item more__item--edit">
              <StyledMoreLink className="more__link" href="#" data-type="edit" onClick={onEditLinkClick}>
                <EditIcon className="more__icon" width="10" height="10" />
                {t('Редактировать')}
              </StyledMoreLink>
            </StyledMoreItem>
            <StyledMoreItem className="more__item more__item--fixed">
              <StyledMoreLink className="more__link" href="#" onClick={onFixedLinkClick}>
                <FixedIcon className="more__icon" width="10" height="10" />
                {fixed ? t('Открепить') : t('Закрепить')}
              </StyledMoreLink>
            </StyledMoreItem>
          </Fragment>
        )}
        <StyledMoreItem className="more__item more__item--delete">
          <StyledMoreLink className="more__link" href="#" data-type="delete" onClick={onDeleteLinkClick}>
            <DeleteIcon className="more__icon" width="8" height="10" />
            {t('Удалить')}
          </StyledMoreLink>
        </StyledMoreItem>
      </StyledMoreList>
    </StyledMore>
  );
};

export default memo(More);
