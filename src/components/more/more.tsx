/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createRef, Fragment, memo, RefObject, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { selectLanguage } from '../../features/language/languageSlice';
import { doneTask, fixedTask, taskMoreClose, taskMoreSwitch, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import { StyledMore, StyledMoreItem, StyledMoreLink, StyledMoreList } from './styled';
import Icons from '../icons';

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
    <StyledMore active={more} done={done} ref={moreElement}>
      <StyledMoreList>
        {done ? (
          <StyledMoreItem undone className="more__item more__item--undone">
            <StyledMoreLink className="more__link" href="#" onClick={onUndoneLinkClick}>
              <Icons.UndoneIcon className="more__icon" width="14" height="10" />
              {t('undone')}
            </StyledMoreLink>
          </StyledMoreItem>
        ) : (
          <Fragment>
            <StyledMoreItem edit className="more__item more__item--edit">
              <StyledMoreLink className="more__link" href="#" data-type="edit" onClick={onEditLinkClick}>
                <Icons.EditIcon className="more__icon" width="10" height="10" />
                {t('edit')}
              </StyledMoreLink>
            </StyledMoreItem>
            <StyledMoreItem fixed className="more__item more__item--fixed">
              <StyledMoreLink className="more__link" href="#" onClick={onFixedLinkClick}>
                <Icons.FixedIcon className="more__icon" width="10" height="10" />
                {fixed ? t('unfixed') : t('fixed')}
              </StyledMoreLink>
            </StyledMoreItem>
          </Fragment>
        )}
        <StyledMoreItem delete className="more__item more__item--delete">
          <StyledMoreLink className="more__link" href="#" data-type="delete" onClick={onDeleteLinkClick}>
            <Icons.DeleteIcon className="more__icon" width="8" height="10" />
            {t('delete')}
          </StyledMoreLink>
        </StyledMoreItem>
      </StyledMoreList>
    </StyledMore>
  );
};

export default memo(More);
