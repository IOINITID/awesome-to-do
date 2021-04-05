import React, { Fragment, memo } from 'react';
import More from '../more/more';
import { useDispatch } from 'react-redux';
import { onMoreSwitchAction, onTaskDoneAction } from '../../actions/index';
import DoneIcon from '../../assets/images/done-icon.svg';
import MoreIcon from '../../assets/images/more-icon.svg';

interface ITask {
  id: string;
  title: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
}

const Task = ({ id, title, done, fixed, more }: ITask) => {
  const dispatch = useDispatch();

  const moreButtonClickHandler = (): void => {
    dispatch(onMoreSwitchAction(id));
  };

  const doneButtonClickHandler = () => {
    dispatch(onTaskDoneAction(id));
  };

  return (
    <Fragment>
      <p className="tasks__description">{title}</p>
      {!done && (
        <button className="button tasks__done" type="button" onClick={doneButtonClickHandler}>
          <DoneIcon className="button__icon" width="22" height="17" />
        </button>
      )}
      <button
        className={more ? `button button--active tasks__more` : `button tasks__more`}
        type="button"
        onClick={moreButtonClickHandler}
      >
        <MoreIcon className="button__icon" width="22" height="5" />
      </button>
      <More id={id} done={done} fixed={fixed} more={more} />
    </Fragment>
  );
};

export default memo(Task);
