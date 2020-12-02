import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction} from '../../actions/index';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

const Navigation = (props) => {
  const {isMenuOpen, isModalOpen, onMenuSwitch, onModalSwitch} = props;

  const onAddButtonClick = () => {
    onModalSwitch();

    if (isMenuOpen) {
      onMenuSwitch();
    }
  };

  const onMenuButtonClick = () => {
    onMenuSwitch();
  };

  const menuButtonClassName = isMenuOpen ? `button button--active` : `button`;
  const modalButtonClassName = isModalOpen ? `button button--active` : `button`;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <button className={menuButtonClassName} type="button" aria-label="Открыть меню." onClick={onMenuButtonClick}>
            <MenuIcon className="button__icon" width="19" height="16" />
          </button>
        </li>
        <li className="navigation__item">
          <button className={modalButtonClassName} type="button" data-type="add" aria-label="Добавить задачу." onClick={onAddButtonClick}>
            <AddIcon className="button__icon" width="16" height="16" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onMenuSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen,
    isModalOpen: state.isModalOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
