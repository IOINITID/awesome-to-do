import React, { memo } from 'react';
import MenuIcon from '../../assets/images/menu-icon.svg';
import AddIcon from '../../assets/images/add-icon.svg';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { selectIsModalOpen, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import Button from '../button';
import { StyledNavigation, StyledNavigationItem, StyledNavigationList } from './styled';

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
    <StyledNavigation>
      <StyledNavigationList>
        <StyledNavigationItem>
          <Button active={isMenuOpen} onClick={onMenuButtonClick} aria-label="Открыть меню.">
            <MenuIcon />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button active={isModalOpen} data-type="add" onClick={onAddButtonClick} aria-label="Добавить задачу.">
            <AddIcon />
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </StyledNavigation>
  );
};

export default memo(Navigation);
