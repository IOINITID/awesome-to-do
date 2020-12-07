import React from 'react';
import {connect} from 'react-redux';
import {onMenuSwitchAction, onModalSwitchAction} from '../../actions/index';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';

interface INavigation {
  isMenuOpen: boolean;
  isModalOpen: boolean;
  onMenuSwitch: () => void;
  onModalSwitch: () => void;
}

const Navigation = (props: INavigation) => {
  const {isMenuOpen, isModalOpen, onMenuSwitch, onModalSwitch} = props;

  const onAddButtonClick = (): void => {
    onModalSwitch();

    if (isMenuOpen) {
      onMenuSwitch();
    }
  };

  const onMenuButtonClick = (): void => {
    onMenuSwitch();
  };

  const menuButtonClassName: string = isMenuOpen ? `button button--active` : `button`;
  const modalButtonClassName: string = isModalOpen ? `button button--active` : `button`;

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
