import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction, onSearchSwitchAction, onSearchChangeAction} from '../../actions/index.js';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

const Navigation = (props) => {
  const {onMenuSwitch, onModalSwitch, menuDefault, isModalOpen, onSearchSwitch, onSearchChange} = props;

  const onAddButtonClick = (evt) => {
    const modalType = evt.target.dataset.type;

    onModalSwitch(null, modalType);
    onSearchSwitch(true);
    onSearchChange(``);

    if (!menuDefault) {
      onMenuSwitch();
    }
  };

  const onMenuButtonClick = (evt) => {
    evt.preventDefault();

    onMenuSwitch();
    onSearchChange(``);
  };

  const menuButtonClassName = menuDefault ? `button` : `button button--active`;
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
  menuDefault: PropTypes.bool.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onSearchSwitch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    menuDefault: state.menuDefault,
    isModalOpen: state.isModalOpen,
    searchDefault: state.searchDefault
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSwitch: () => dispatch(onMenuSwitchAction()),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
    onSearchSwitch: (searchDefault) => dispatch(onSearchSwitchAction(searchDefault)),
    onSearchChange: (searchData) => dispatch(onSearchChangeAction(searchData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
