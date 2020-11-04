import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction, onTaskAddAction, onTaskDeleteAction, onTaskEditAction, onWelcomeSwitchAction} from '../../actions/index.js';
import CloseIcon from '../../assets/images/close-icon.svg';
import DeleteIcon from '../../assets/images/delete-icon.svg';
import DoneIcon from '../../assets/images/done-icon.svg';

const Modal = (props) => {
  const {modalType, modalField, onModalSwitch, currentId, onTaskEdit, onTaskAdd, onTaskDelete, onMenuSwitch, isMenuOpen, onWelcomeSwitch} = props;

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

  switch (true) {
    case modalType === `add`:
      modalTitle = `Добавить задачу`;
      modalClassName = `modal modal--active modal--add`;
      break;
    case modalType === `edit`:
      modalTitle = `Редактировать задачу`;
      modalClassName = `modal modal--active modal--edit`;
      break;
    case modalType === `delete`:
      modalTitle = `Удалить задачу`;
      modalClassName = `modal modal--active modal--delete`;
      break;
    default:
      modalTitle = `Добавить задачу`;
      modalClassName = `modal modal--active modal--add`;
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
      </div>
    </Fragment>
  );
};

Modal.propTypes = {
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
