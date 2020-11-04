import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction, onSearchChangeAction} from '../../actions/index.js';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

const Navigation = (props) => {
  const {onMenuSwitch, onModalSwitch, isMenuOpen, isModalOpen, onSearchChange} = props;

  const onAddButtonClick = (evt) => {
    const modalType = evt.target.dataset.type;

    onModalSwitch(null, modalType);
    onSearchChange(``);

    if (isMenuOpen) {
      onMenuSwitch();
    }
  };

  const onMenuButtonClick = (evt) => {
    evt.preventDefault();

    onMenuSwitch();
    onSearchChange(``);
  };

  const menuButtonClassName = isMenuOpen ? `button button--active` : `button`;
  const modalButtonClassName = isModalOpen ? `button button--active` : `button`;

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <button className={menuButtonClassName} type="button" onClick={onMenuButtonClick}>
            <MenuIcon className="button__icon" width="19" height="16" />
          </button>
        </li>
        <li className="navigation__item">
          <button className={modalButtonClassName} type="button" data-type="add" onClick={onAddButtonClick}>
            <AddIcon className="button__icon" width="16" height="16" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  onMenuSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired
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
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
