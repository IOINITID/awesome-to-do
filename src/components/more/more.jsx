import React, {createRef, Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onTaskFixedAction, onTaskDoneAction, onModalSwitchAction, onMoreSwitchAction, onMoreCloseAction} from '../../actions/index.js';
import UndoneIcon from '../../assets/images/undone-icon.svg';
import EditIcon from '../../assets/images/edit-icon.svg';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import DeleteIcon from '../../assets/images/delete-icon.svg';

const More = (props) => {
  const {id, done, fixed, more, onMoreClose, onTaskDone, onMoreSwitch, onModalSwitch, onTaskFixed} = props;

  const moreElement = createRef();

  const onUndoneLinkClick = (evt) => {
    evt.preventDefault();

    onTaskDone(id);
    onMoreSwitch();
  };

  const onEditLinkClick = (evt) => {
    evt.preventDefault();

    const modalType = evt.target.dataset.type;

    onMoreSwitch();
    onModalSwitch(id, modalType);
  };

  const onFixedLinkClick = (evt) => {
    evt.preventDefault();

    onTaskFixed(id);
    onMoreSwitch();
  };

  const onDeleteLinkClick = (evt) => {
    evt.preventDefault();

    const modalType = evt.target.dataset.type;

    onMoreSwitch();
    onModalSwitch(id, modalType);
  };

  const onMoreCloseClick = (evt) => {
    if (more && moreElement.current && !moreElement.current.contains(evt.target)) {
      onMoreClose();
    }
  };

  useEffect(() => {
    if (more) {
      document.addEventListener(`click`, onMoreCloseClick);
    }

    return () => document.removeEventListener(`click`, onMoreCloseClick);
  }, [more]);

  let moreClassName = more ? `more more--active` : `more`;

  return (
    <div className={moreClassName} ref={moreElement}>
      <ul className="more__list">
        {
          done ? <li className="more__item more__item--undone">
            <a className="more__link" href="#" onClick={onUndoneLinkClick}>
              <UndoneIcon className="more__icon" width="14" height="10" />
              Невыполненное
            </a>
          </li> :
            <Fragment>
              <li className="more__item more__item--edit">
                <a className="more__link" href="#" data-type="edit" onClick={onEditLinkClick}>
                  <EditIcon className="more__icon" width="10" height="10" />
                  Редактировать
                </a>
              </li>
              <li className="more__item more__item--fixed">
                <a className="more__link" href="#" onClick={onFixedLinkClick}>
                  <FixedIcon className="more__icon" width="10" height="10" />
                  {fixed ? `Открепить` : `Закрепить`}
                </a>
              </li>
            </Fragment>
        }
        <li className="more__item more__item--delete">
          <a className="more__link" href="#" data-type="delete" onClick={onDeleteLinkClick}>
            <DeleteIcon className="more__icon" width="8" height="10" />
            Удалить
          </a>
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
