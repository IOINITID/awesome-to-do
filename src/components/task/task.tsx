import React, { Fragment, memo } from 'react';
import More from '../more/more';
import { useDispatch } from 'react-redux';
import DoneIcon from '../../assets/images/done-icon.svg';
import MoreIcon from '../../assets/images/more-icon.svg';
import { doneTask, taskMoreSwitch } from '../../features/tasks/tasksSlice';
import Button from '../button';
import { StyledTasksDescription } from '../tasks/styled';

interface ITask {
  id: string;
  value: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
}

const Task = ({ id, value, done, fixed, more }: ITask) => {
  const dispatch = useDispatch();

  const moreButtonClickHandler = (): void => {
    dispatch(taskMoreSwitch(id));
  };

  const doneButtonClickHandler = () => {
    dispatch(doneTask(id));
  };

  return (
    <Fragment>
      <StyledTasksDescription>{value}</StyledTasksDescription>
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          columnGap: '30px',
        }}
      >
        {!done && (
          <Button outline onClick={doneButtonClickHandler}>
            <DoneIcon />
          </Button>
        )}

        <Button active={more} outline onClick={moreButtonClickHandler}>
          <MoreIcon />
        </Button>
      </div>
      <More id={id} done={done} fixed={fixed} more={more} />
    </Fragment>
  );
};

export default memo(Task);
