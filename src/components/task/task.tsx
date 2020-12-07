import React, {Fragment} from 'react';
import More from '../more/more';
import {connect} from 'react-redux';
import {onMoreSwitchAction, onTaskDoneAction} from '../../actions/index';
import DoneIcon from '../../assets/images/done-icon.svg';
import MoreIcon from '../../assets/images/more-icon.svg';

interface ITask {
  id: string;
  title: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
  onTaskDone: (id: string) => void;
  onMoreSwitch: (id: string) => void;
}

const Task = (props: ITask) => {
  const {id, title, done, fixed, more, onTaskDone, onMoreSwitch} = props;

  let moreButtonClassName: string = more ? `button button--active tasks__more` : `button tasks__more`;

  const onMoreButtonClick = (): void => {
    onMoreSwitch(id);
  };

  return (
    <Fragment>
      <p className="tasks__description">{title}</p>
      {
        !done &&
        <button className="button tasks__done" type="button" onClick={() => onTaskDone(id)}>
          <DoneIcon className="button__icon" width="22" height="17" />
        </button>
      }
      <button className={moreButtonClassName} type="button" onClick={onMoreButtonClick}>
        <MoreIcon className="button__icon" width="22" height="5" />
      </button>
      <More id={id} done={done} fixed={fixed} more={more} />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskDone: (id) => dispatch(onTaskDoneAction(id)),
    onMoreSwitch: (id) => dispatch(onMoreSwitchAction(id))
  };
};

export default connect(null, mapDispatchToProps)(Task);
