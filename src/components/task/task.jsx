import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import More from '../more/more.jsx';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {
      moreDefault: true
    };

    this.onMoreSwitch = () => {
      this.setState((state) => {
        return {
          moreDefault: !state.moreDefault
        };
      });
    };
  }

  render() {
    const {moreDefault} = this.state;
    const {id, title, done, fixed, onDoneSwitch, onTaskFixed, onTaskDelete} = this.props;

    let moreButtonClassName = moreDefault ? `button tasks__more` : `button button--active tasks__more`;

    return (
      <Fragment>
        <p className="tasks__description">{title}</p>
        {
          done ? null : <button className="button tasks__done" type="button" onClick={() => onDoneSwitch(id)}>
            <svg className="button__icon" width="22" height="17" viewBox="0 0 22 17" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.42857L7.4 15L20 2" stroke="white" strokeWidth="3" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
        }
        <button className={moreButtonClassName} type="button" onClick={this.onMoreSwitch}>
          <svg className="button__icon" width="22" height="5" viewBox="0 0 22 5" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 3.5C11.6904 3.5 12.25 2.94036 12.25 2.25C12.25 1.55964 11.6904 1 11 1C10.3096 1 9.75 1.55964 9.75 2.25C9.75 2.94036 10.3096 3.5 11 3.5Z"
              fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M19.75 3.5C20.4404 3.5 21 2.94036 21 2.25C21 1.55964 20.4404 1 19.75 1C19.0596 1 18.5 1.55964 18.5 2.25C18.5 2.94036 19.0596 3.5 19.75 3.5Z"
              fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M2.25 3.5C2.94036 3.5 3.5 2.94036 3.5 2.25C3.5 1.55964 2.94036 1 2.25 1C1.55964 1 1 1.55964 1 2.25C1 2.94036 1.55964 3.5 2.25 3.5Z"
              fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <More id={id} done={done} fixed={fixed} moreDefault={moreDefault} onDoneSwitch={onDoneSwitch} onTaskFixed={onTaskFixed} onTaskDelete={onTaskDelete} onMoreSwitch={this.onMoreSwitch}></More>
      </Fragment>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  onDoneSwitch: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};
