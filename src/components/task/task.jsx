import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import More from '../more/more.jsx';
import {connect} from 'react-redux';
import {onMoreSwitchAction, onTaskDoneAction} from '../../actions/index.js';
import DoneIcon from '../../assets/images/done-icon.svg';
import MoreIcon from '../../assets/images/more-icon.svg';

const Task = (props) => {
  const {id, title, done, fixed, more, onTaskDone, onMoreSwitch} = props;

  let moreButtonClassName = more ? `button button--active tasks__more` : `button tasks__more`;

  const onMoreButtonClick = () => {
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

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  more: PropTypes.bool.isRequired,
  onTaskDone: PropTypes.func.isRequired,
  onMoreSwitch: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskDone: (id) => dispatch(onTaskDoneAction(id)),
    onMoreSwitch: (id) => dispatch(onMoreSwitchAction(id))
  };
};

export default connect(null, mapDispatchToProps)(Task);
