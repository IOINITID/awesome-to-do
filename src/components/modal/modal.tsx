/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment, memo, useEffect, useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { welcomeSwitch } from '../../features/welcome/welcomeSlice';
import { selectTheme } from '../../features/theme/themeSlice';
import { selectLanguage } from '../../features/language/languageSlice';
import {
  addTask,
  deleteTask,
  selectCurrentId,
  selectIsModalOpen,
  selectModalType,
  selectModalValue,
  taskEdit,
  tasksModalSwitch,
} from '../../features/tasks/tasksSlice';
import Button from '../button';
import {
  StyledModal,
  StyledModalForm,
  StyledModalInfo,
  StyledModalInput,
  StyledModalLabel,
  StyledModalLink,
  StyledModalTitle,
  StyledOverlay,
} from './styled';
import Icons from '../icons';

const Modal = () => {
  const dispatch = useDispatchTyped();
  const isMenuOpen = useSelectorTyped(selectMenu);
  const theme = useSelectorTyped(selectTheme);
  const language = useSelectorTyped(selectLanguage);
  const currentId = useSelectorTyped(selectCurrentId);
  const modalType = useSelectorTyped(selectModalType);
  const modalValue = useSelectorTyped(selectModalValue);
  const isModalOpen = useSelectorTyped(selectIsModalOpen);

  const [title, setTitle] = useState(modalValue);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const value = (evt.target as HTMLInputElement).value;

    setTitle(value);
  };

  const onCloseLinkClick = (evt: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>): void => {
    evt.preventDefault();

    dispatch(tasksModalSwitch({ id: '', type: 'add' }));
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (modalType === 'edit') {
      dispatch(taskEdit({ id: currentId, value: title }));
    } else {
      dispatch(addTask(title));
    }

    setTitle('');
    dispatch(tasksModalSwitch({ id: '', type: 'add' }));
    dispatch(welcomeSwitch(false));

    if (isMenuOpen) {
      dispatch(menuSwitch());
    }
  };

  const onDeleteButtonClick = (): void => {
    dispatch(deleteTask(currentId));
    dispatch(tasksModalSwitch({ id: '', type: 'add' }));
  };

  const onEscKeyDownPress = (evt): void => {
    if (evt.key === 'Escape') {
      dispatch(tasksModalSwitch({ id: '', type: 'add' }));
    }
  };

  useEffect(() => {
    setTitle(modalValue);
    document.addEventListener('keydown', onEscKeyDownPress);
    return () => document.removeEventListener('keydown', onEscKeyDownPress);
  }, []);

  let modalTitle: string;
  let modalIcons: React.ReactElement;

  switch (true) {
    case modalType === 'add':
      modalTitle = t('menuAdd');
      modalIcons = (
        <Fragment>
          {theme === 'dark' ? (
            <Icons.ModalAddFirstDarkIcon className="modal__icon-first" />
          ) : (
            <Icons.ModalAddFirstLightIcon className="modal__icon-first" />
          )}
          {theme === 'dark' ? (
            <Icons.ModalAddSecondDarkIcon className="modal__icon-second" />
          ) : (
            <Icons.ModalAddSecondLightIcon className="modal__icon-second" />
          )}
        </Fragment>
      );
      break;
    case modalType === 'edit':
      modalTitle = t('editTask');
      modalIcons = (
        <Fragment>
          {theme === 'dark' ? (
            <Icons.ModalEditFirstDarkIcon className="modal__icon-first" />
          ) : (
            <Icons.ModalEditFirstLightIcon className="modal__icon-first" />
          )}
          {theme === 'dark' ? (
            <Icons.ModalEditSecondDarkIcon className="modal__icon-second" />
          ) : (
            <Icons.ModalEditSecondLightIcon className="modal__icon-second" />
          )}
        </Fragment>
      );
      break;
    case modalType === 'delete':
      modalTitle = t('deleteTask');
      modalIcons = (
        <Fragment>
          {theme === 'dark' ? (
            <Icons.ModalDeleteFirstDarkIcon className="modal__icon-first" />
          ) : (
            <Icons.ModalDeleteFirstLightIcon className="modal__icon-first" />
          )}
          {theme === 'dark' ? (
            <Icons.ModalDeleteSecondDarkIcon className="modal__icon-second" />
          ) : (
            <Icons.ModalDeleteSecondLightIcon className="modal__icon-second" />
          )}
        </Fragment>
      );
      break;
    default:
      modalTitle = t('menuAdd');
      modalIcons = (
        <Fragment>
          {theme === 'dark' ? (
            <Icons.ModalAddFirstDarkIcon className="modal__icon-first" />
          ) : (
            <Icons.ModalAddFirstLightIcon className="modal__icon-first" />
          )}
          {theme === 'dark' ? (
            <Icons.ModalAddSecondDarkIcon className="modal__icon-second" />
          ) : (
            <Icons.ModalAddSecondLightIcon className="modal__icon-second" />
          )}
        </Fragment>
      );
      break;
  }

  return (
    <Fragment>
      <StyledOverlay onClick={onCloseLinkClick} />
      <StyledModal active={isModalOpen} type={modalType}>
        <StyledModalInfo>
          <StyledModalTitle>{modalTitle}</StyledModalTitle>
          <StyledModalLink href="#" onClick={onCloseLinkClick}>
            <Icons.CloseIcon className="modal__icon" width="21" height="21" />
          </StyledModalLink>
        </StyledModalInfo>
        <StyledModalForm onSubmit={onFormSubmit} autoComplete="off">
          <StyledModalLabel htmlFor="task-field">
            <StyledModalInput
              type="text"
              name="task"
              id="task-field"
              value={title}
              autoFocus={true}
              placeholder={t('addNewTask')}
              onChange={onInputChange}
              onKeyDown={onEscKeyDownPress}
              maxLength={100}
              required
              disabled={modalType === 'delete' ? true : false}
            />
          </StyledModalLabel>
          {modalType === 'delete' ? (
            <Button modal onClick={onDeleteButtonClick}>
              <Icons.DeleteIcon />
            </Button>
          ) : (
            <Button modal outline type="submit">
              <Icons.DoneIcon />
            </Button>
          )}
        </StyledModalForm>
        {modalIcons}
      </StyledModal>
    </Fragment>
  );
};

export default memo(Modal);
