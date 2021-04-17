import React, { memo } from 'react';
import { useDispatchTyped, useSelectorTyped } from '../../hooks';
import { menuSwitch, selectMenu } from '../../features/menu/menuSlice';
import { selectIsModalOpen, tasksModalSwitch } from '../../features/tasks/tasksSlice';
import Button from '../button';
import { StyledNavigation, StyledNavigationItem, StyledNavigationList } from './styled';
import Icons from '../icons';

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
            <Icons.MenuIcon />
          </Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button active={isModalOpen} data-type="add" onClick={onAddButtonClick} aria-label="Добавить задачу.">
            <Icons.AddIcon />
          </Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </StyledNavigation>
  );
};

export default memo(Navigation);
