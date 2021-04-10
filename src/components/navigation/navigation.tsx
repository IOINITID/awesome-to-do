import React, { memo } from 'react';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { selectIsModalOpen, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import Button from '../button';

const Navigation = () => {
  const dispatch = useDispatchTyped();
  const isMenuOpen = useSelectorTyped(selectMenu);
  const isModalOpen = useSelectorTyped(selectIsModalOpen);

  const onAddButtonClick = (): void => {
    dispatch(tasksModalSwitch({ id: '', type: 'add' }));

    if (isMenuOpen) {
      dispatch(menuSwitch());
    }
  };

  const onMenuButtonClick = (): void => {
    dispatch(menuSwitch());
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Button active={isMenuOpen} onClick={onMenuButtonClick} aria-label="Открыть меню.">
            <MenuIcon />
          </Button>
        </li>
        <li className="navigation__item">
          <Button active={isModalOpen} data-type="add" onClick={onAddButtonClick} aria-label="Добавить задачу.">
            <AddIcon />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navigation);
