import React from 'react';
import { connect } from 'react-redux';
import { onModalSwitchAction } from '../../actions/index';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';

interface INavigation {
  isModalOpen: boolean;
  onModalSwitch: () => void;
}

const Navigation = (props: INavigation) => {
  const { isModalOpen, onModalSwitch } = props;

  const dispatch = useDispatchTyped();
  const isMenuOpen = useSelectorTyped(selectMenu);

  const onAddButtonClick = (): void => {
    onModalSwitch();

    if (isMenuOpen) {
      dispatch(menuSwitch());
    }
  };

  const onMenuButtonClick = (): void => {
    dispatch(menuSwitch());
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
          <button
            className={modalButtonClassName}
            type="button"
            data-type="add"
            aria-label="Добавить задачу."
            onClick={onAddButtonClick}
          >
            <AddIcon className="button__icon" width="16" height="16" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.app.isModalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
