import React, { Fragment, memo } from 'react';
import More from '../more';
import { doneTask, taskMoreSwitch } from '../../features/tasks/tasksSlice';
import Button from '../button';
import { StyledTasksDescription } from '../tasks/styled';
import { StyledTaskButtons } from './styled';
import { useDispatchTyped } from '../../hooks';
import Icons from '../icons';

interface ITask {
  id: string;
  value: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
}

const Task = ({ id, value, done, fixed, more }: ITask) => {
  const dispatch = useDispatchTyped();

  const moreButtonClickHandler = (): void => {
    dispatch(taskMoreSwitch(id));
  };

  const doneButtonClickHandler = () => {
    dispatch(doneTask(id));
  };

  return (
    <Fragment>
      <StyledTasksDescription>{value}</StyledTasksDescription>
      <StyledTaskButtons>
        {!done && (
          <Button outline onClick={doneButtonClickHandler}>
            <Icons.DoneIcon />
          </Button>
        )}
        <Button active={more} fill onClick={moreButtonClickHandler}>
          <Icons.MoreIcon />
        </Button>
      </StyledTaskButtons>
      <More id={id} done={done} fixed={fixed} more={more} />
    </Fragment>
  );
};

export default memo(Task);
