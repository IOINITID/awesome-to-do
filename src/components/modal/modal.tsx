import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction, onTaskAddAction, onTaskDeleteAction, onTaskEditAction, onWelcomeSwitchAction} from '../../actions/index';
import CloseIcon from '../../assets/images/close-icon.svg';
import DeleteIcon from '../../assets/images/delete-icon.svg';
import DoneIcon from '../../assets/images/done-icon.svg';
import ModalAddFirstDarkIcon from '../../assets/images/modal-add-first-dark-icon.svg';
import ModalAddFirstLightIcon from '../../assets/images/modal-add-first-light-icon.svg';
import ModalAddSecondDarkIcon from '../../assets/images/modal-add-second-dark-icon.svg';
import ModalAddSecondLightIcon from '../../assets/images/modal-add-second-light-icon.svg';
import ModalEditFirstDarkIcon from '../../assets/images/modal-edit-first-dark-icon.svg';
import ModalEditFirstLightIcon from '../../assets/images/modal-edit-first-light-icon.svg';
import ModalEditSecondDarkIcon from '../../assets/images/modal-edit-second-dark-icon.svg';
import ModalEditSecondLightIcon from '../../assets/images/modal-edit-second-light-icon.svg';
import ModalDeleteFirstDarkIcon from '../../assets/images/modal-delete-first-dark-icon.svg';
import ModalDeleteFirstLightIcon from '../../assets/images/modal-delete-first-light-icon.svg';
import ModalDeleteSecondDarkIcon from '../../assets/images/modal-delete-second-dark-icon.svg';
import ModalDeleteSecondLightIcon from '../../assets/images/modal-delete-second-light-icon.svg';

const Modal = (props) => {
  const {theme, modalType, modalField, onModalSwitch, currentId, onTaskEdit, onTaskAdd, onTaskDelete, onMenuSwitch, isMenuOpen, onWelcomeSwitch} = props;

  const [title, setTitle] = useState(modalField);

  const onInputChange = (evt) => {
    const value = evt.target.value;

    setTitle(value);
  };

  const onCloseLinkClick = (evt) => {
    evt.preventDefault();

    onModalSwitch();
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (modalType === `edit`) {
      onTaskEdit(currentId, title);
    } else {
      onTaskAdd(title);
    }

    setTitle(``);
    onModalSwitch();
    onWelcomeSwitch();

    if (isMenuOpen) {
      onMenuSwitch();
    }
  };

  const onDeleteButtonClick = () => {
    onTaskDelete(currentId);
    onModalSwitch();
  };

  const onEscKeyDownPress = (evt) => {
    if (evt.key === `Escape`) {
      onModalSwitch();
    }
  };

  useEffect(() => {
    setTitle(modalField);
    document.addEventListener(`keydown`, onEscKeyDownPress);
    return () => document.removeEventListener(`keydown`, onEscKeyDownPress);
  }, []);

  let modalTitle;
  let modalClassName;
  let modalIcons;

  switch (true) {
    case modalType === `add`:
      modalTitle = `Добавить задачу`;
      modalClassName = `modal modal--active modal--add`;
      modalIcons = (
        <Fragment>
          {theme === `dark` ? <ModalAddFirstDarkIcon className="modal__icon-first" /> : <ModalAddFirstLightIcon className="modal__icon-first" />}
          {theme === `dark` ? <ModalAddSecondDarkIcon className="modal__icon-second" /> : <ModalAddSecondLightIcon className="modal__icon-second" />}
        </Fragment>
      );
      break;
    case modalType === `edit`:
      modalTitle = `Редактировать задачу`;
      modalClassName = `modal modal--active modal--edit`;
      modalIcons = (
        <Fragment>
          {theme === `dark` ? <ModalEditFirstDarkIcon className="modal__icon-first" /> : <ModalEditFirstLightIcon className="modal__icon-first" />}
          {theme === `dark` ? <ModalEditSecondDarkIcon className="modal__icon-second" /> : <ModalEditSecondLightIcon className="modal__icon-second" />}
        </Fragment>
      );
      break;
    case modalType === `delete`:
      modalTitle = `Удалить задачу`;
      modalClassName = `modal modal--active modal--delete`;
      modalIcons = (
        <Fragment>
          {theme === `dark` ? <ModalDeleteFirstDarkIcon className="modal__icon-first" /> : <ModalDeleteFirstLightIcon className="modal__icon-first" />}
          {theme === `dark` ? <ModalDeleteSecondDarkIcon className="modal__icon-second" /> : <ModalDeleteSecondLightIcon className="modal__icon-second" />}
        </Fragment>
      );
      break;
    default:
      modalTitle = `Добавить задачу`;
      modalClassName = `modal modal--active modal--add`;
      modalIcons = (
        <Fragment>
          {theme === `dark` ? <ModalAddFirstDarkIcon className="modal__icon-first" /> : <ModalAddFirstLightIcon className="modal__icon-first" />}
          {theme === `dark` ? <ModalAddSecondDarkIcon className="modal__icon-second" /> : <ModalAddSecondLightIcon className="modal__icon-second" />}
        </Fragment>
      );
      break;
  }

  return (
    <Fragment>
      <div className="overlay" onClick={onCloseLinkClick}></div>
      <div className={modalClassName}>
        <div className="modal__info">
          <h2 className="modal__title">{modalTitle}</h2>
          <a className="modal__link" href="#" onClick={onCloseLinkClick}>
            <CloseIcon className="modal__icon" width="21" height="21" />
          </a>
        </div>
        <form className="modal__form" onSubmit={onFormSubmit} autoComplete="off">
          <label className="modal__label" htmlFor="task-field">
            <input className="modal__field" type="text" name="task" id="task-field" value={title} autoFocus={true} placeholder="Введите новую задачу" onChange={onInputChange} onKeyDown={onEscKeyDownPress} required disabled={modalType === `delete` ? true : false} />
          </label>
          {
            modalType === `delete` ?
              <button className="button modal__button" type="button" onClick={onDeleteButtonClick}>
                <DeleteIcon className="button__icon button__icon--delete" width="18" height="22" />
              </button> :
              <button className="button modal__button" type="submit">
                <DoneIcon className="button__icon button__icon--add" width="28" height="22" />
              </button>
          }
        </form>
        {modalIcons}
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
  theme: PropTypes.string.isRequired,
  currentId: PropTypes.string.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onTaskAdd: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  modalField: PropTypes.string.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  onWelcomeSwitch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    modalField: state.modalField,
    modalType: state.modalType,
    currentId: state.currentId,
    isMenuOpen: state.isMenuOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskAdd: (title) => dispatch(onTaskAddAction(title)),
    onTaskDelete: (id) => dispatch(onTaskDeleteAction(id)),
    onTaskEdit: (id, title) => dispatch(onTaskEditAction(id, title)),
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onWelcomeSwitch: () => dispatch(onWelcomeSwitchAction()),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
