/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createRef, Fragment, memo, RefObject, useEffect } from 'react';
import UndoneIcon from '../../assets/images/undone-icon.svg';
import EditIcon from '../../assets/images/edit-icon.svg';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import DeleteIcon from '../../assets/images/delete-icon.svg';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { selectLanguage } from '../../features/language/languageSlice';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { doneTask, fixedTask, taskMoreClose, taskMoreSwitch, tasksModalSwitch } from '../../features/tasks/tasksSlice';

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

  const moreClassName: string = more ? 'more more--active' : 'more';

  return (
    <div className={moreClassName} ref={moreElement}>
      <ul className="more__list">
        {done ? (
          <li className="more__item more__item--undone">
            <a className="more__link" href="#" onClick={onUndoneLinkClick}>
              <UndoneIcon className="more__icon" width="14" height="10" />
              {t('Невыполненное')}
            </a>
          </li>
        ) : (
          <Fragment>
            <li className="more__item more__item--edit">
              <a className="more__link" href="#" data-type="edit" onClick={onEditLinkClick}>
                <EditIcon className="more__icon" width="10" height="10" />
                {t('Редактировать')}
              </a>
            </li>
            <li className="more__item more__item--fixed">
              <a className="more__link" href="#" onClick={onFixedLinkClick}>
                <FixedIcon className="more__icon" width="10" height="10" />
                {fixed ? t('Открепить') : t('Закрепить')}
              </a>
            </li>
          </Fragment>
        )}
        <li className="more__item more__item--delete">
          <a className="more__link" href="#" data-type="delete" onClick={onDeleteLinkClick}>
            <DeleteIcon className="more__icon" width="8" height="10" />
            {t('Удалить')}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(More);
