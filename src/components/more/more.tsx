import React, {createRef, Fragment, RefObject, useEffect} from 'react';
import {connect} from 'react-redux';
import {onTaskFixedAction, onTaskDoneAction, onModalSwitchAction, onMoreSwitchAction, onMoreCloseAction} from '../../actions/index';
import UndoneIcon from '../../assets/images/undone-icon.svg';
import EditIcon from '../../assets/images/edit-icon.svg';
import FixedIcon from '../../assets/images/fixed-icon.svg';
import DeleteIcon from '../../assets/images/delete-icon.svg';

interface IMore {
  id: string;
  done: boolean;
  fixed: boolean;
  more: boolean;
  onTaskDone: (id: string) => void;
  onTaskFixed: (id: string) => void;
  onMoreSwitch: () => void;
  onModalSwitch: (id: string, type: string) => void;
  onMoreClose: () => void;
}

const More = (props: IMore) => {
  const {id, done, fixed, more, onMoreClose, onTaskDone, onMoreSwitch, onModalSwitch, onTaskFixed} = props;

  const moreElement: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  const onUndoneLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    onTaskDone(id);
    onMoreSwitch();
  };

  const onEditLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    const modalType: string = (evt.target as HTMLAnchorElement).dataset.type;

    onMoreSwitch();
    onModalSwitch(id, modalType);
  };

  const onFixedLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    onTaskFixed(id);
    onMoreSwitch();
  };

  const onDeleteLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();

    const modalType: string = (evt.target as HTMLAnchorElement).dataset.type;

    onMoreSwitch();
    onModalSwitch(id, modalType);
  };

  const onMoreCloseClick = (evt): void => {
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

  let moreClassName: string = more ? `more more--active` : `more`;

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
