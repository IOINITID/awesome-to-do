import React, {createRef, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onTaskFixedAction, onTaskDoneAction, onModalSwitchAction, onMoreSwitchAction, onMoreCloseAction} from '../../actions/index.js';

const More = (props) => {
  const onUndoneLinkClick = (evt) => {
    evt.preventDefault();

    props.onTaskDone(props.id);
    props.onMoreSwitch();
  };

  const onEditLinkClick = (evt) => {
    evt.preventDefault();

    const modalType = evt.target.dataset.type;

    props.onMoreSwitch();
    props.onModalSwitch(props.id, modalType);
  };

  const onFixedLinkClick = (evt) => {
    evt.preventDefault();

    props.onTaskFixed(props.id);
    props.onMoreSwitch();
  };

  const onDeleteLinkClick = (evt) => {
    evt.preventDefault();

    const modalType = evt.target.dataset.type;

    props.onMoreSwitch();
    props.onModalSwitch(props.id, modalType);
  };

  const {done, fixed, more} = props;

  const moreContainer = createRef();

  const onMoreClose = (evt) => {
    if (more && moreContainer.current && !moreContainer.current.contains(evt.target)) {
      props.onMoreClose();
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, onMoreClose);
  }, [more]);

  let moreClassName = more ? `more more--active` : `more`;

  return (
    <div className={moreClassName} ref={moreContainer}>
      <ul className="more__list">
        {
          done ? <li className="more__item more__item--undone">
            <a className="more__link" href="#" onClick={onUndoneLinkClick}>
              <svg className="more__icon" width="14" height="10" viewBox="0 0 14 10" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.4167 0H3.63906C3.44249 0 3.25932 0.094453 3.15082 0.251119L0.0953799 4.69556C-0.0317933 4.88056 -0.0317933 5.11944 0.0953799 5.30444L3.15082 9.74888C3.25932 9.90555 3.44249 10 3.63906 10H13.4167C13.7393 10 14 9.75167 14 9.44445V0.555571C14 0.248333 13.7393 0 13.4167 0ZM10.9125 7.61498C10.7987 7.72331 10.6494 7.77777 10.5001 7.77777C10.3507 7.77777 10.2014 7.72331 10.0877 7.61498L8.16677 5.78553L6.24588 7.61498C6.13213 7.72331 5.98281 7.77777 5.83346 7.77777C5.68414 7.77777 5.53479 7.72331 5.42104 7.61498C5.19297 7.39777 5.19297 7.04665 5.42104 6.82944L7.34193 4.99999L5.42104 3.17054C5.19297 2.95333 5.19297 2.60221 5.42104 2.38499C5.64911 2.16778 6.01778 2.16778 6.24585 2.38499L8.16674 4.21444L10.0876 2.38499C10.3157 2.16778 10.6844 2.16778 10.9124 2.38499C11.1405 2.60221 11.1405 2.95333 10.9124 3.17054L8.99155 4.99999L10.9125 6.82944C11.1406 7.04665 11.1406 7.39777 10.9125 7.61498Z"
                  fill="white" />
              </svg>Невыполненное</a>
          </li> :
            <Fragment>
              <li className="more__item more__item--edit">
                <a className="more__link" href="#" data-type="edit" onClick={onEditLinkClick}>
                  <svg className="more__icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.21825 1.66887L8.25247 3.71304L3.10329 8.88745L1.07021 6.84328L6.21825 1.66887ZM9.79606 1.17586L8.88887 0.264235C8.53827 -0.0880783 7.96898 -0.0880783 7.61719 0.264235L6.21825 1.66887L7.28283 2.73866L8.25247 3.71304L9.79606 2.16307C10.068 1.8898 10.068 1.44912 9.79606 1.17586ZM0.00566077 9.71652C-0.0313595 9.88395 0.119066 10.034 0.285695 9.99325L2.5525 9.44095L0.519426 7.39678L0.00566077 9.71652Z"
                      fill="white" />
                  </svg>Редактировать</a>
              </li>
              <li className="more__item more__item--fixed">
                <a className="more__link" href="#" onClick={onFixedLinkClick}>
                  <svg className="more__icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.70416 7.12364L9.87791 4.94764C9.9774 4.8489 10.0194 4.70641 9.99155 4.56893C9.96324 4.43185 9.86792 4.31771 9.73763 4.26605C8.2628 3.67737 7.14596 3.80485 6.67267 3.90693L4.04642 1.6705C4.09846 0.785601 3.62308 0.182758 3.60101 0.155261C3.52733 0.0631818 3.41744 0.00693808 3.29921 0.000278674C3.18223 -0.00388102 3.06568 0.0386142 2.98242 0.121925L0.121872 2.98494C0.0377926 3.06869 -0.00634465 3.18492 0.000738384 3.30366C0.00739215 3.42199 0.0644272 3.53238 0.157677 3.60571C0.668846 4.01233 1.30782 4.05525 1.64709 4.04651L3.90158 6.69871C3.81957 7.17282 3.71385 8.33561 4.27163 9.73753C4.32325 9.86792 4.43689 9.96291 4.57384 9.99166C4.60216 9.99707 4.63004 10 4.65792 10C4.76741 10 4.87356 9.95709 4.95223 9.87792L7.11556 7.71275L9.27848 9.87792C9.35966 9.95916 9.46621 10 9.57279 10C9.67935 10 9.78593 9.95916 9.8671 9.87792C10.0299 9.71503 10.0299 9.45172 9.8671 9.28883L7.70416 7.12364Z" fill="#F9E4B0" />
                  </svg>{fixed ? `Открепить` : `Закрепить`}</a>
              </li>
            </Fragment>
        }
        <li className="more__item more__item--delete">
          <a className="more__link" href="#" data-type="delete" onClick={onDeleteLinkClick}>
            <svg className="more__icon" width="8" height="10" viewBox="0 0 8 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.571429 8.88889C0.571429 9.5 1.08571 10 1.71429 10H6.28571C6.91429 10 7.42857 9.5 7.42857 8.88889V2.22222H0.571429V8.88889ZM8 0.555556H6L5.42857 0H2.57143L2 0.555556H0V1.66667H8V0.555556Z"
                fill="white" />
            </svg>Удалить</a>
        </li>
      </ul>
    </div>
  );
};

More.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  more: PropTypes.bool.isRequired,
  onTaskDone: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onMoreSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onMoreClose: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskFixed: (id) => dispatch(onTaskFixedAction(id)),
    onTaskDone: (id) => dispatch(onTaskDoneAction(id)),
    onModalSwitch: (id, type) => dispatch(onModalSwitchAction(id, type)),
    onMoreSwitch: (id) => dispatch(onMoreSwitchAction(id)),
    onMoreClose: () => dispatch(onMoreCloseAction())
  };
};

export default connect(null, mapDispatchToProps)(More);
