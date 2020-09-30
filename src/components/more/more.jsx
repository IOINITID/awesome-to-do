import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class More extends Component {
  constructor() {
    super();

    this.onUndoneLinkClick = (evt) => {
      evt.preventDefault();

      this.props.onDoneSwitch(this.props.id);
      this.props.onMoreSwitch();
    };

    this.onEditLinkClick = (evt) => {
      evt.preventDefault();

      const modalType = evt.target.dataset.type;

      this.props.onMoreSwitch();
      this.props.onModalSwitch(this.props.id, modalType);
    };

    this.onFixedLinkClick = (evt) => {
      evt.preventDefault();

      this.props.onTaskFixed(this.props.id);
      this.props.onMoreSwitch();
    };

    this.onDeleteLinkClick = (evt) => {
      evt.preventDefault();

      const modalType = evt.target.dataset.type;

      this.props.onMoreSwitch();
      this.props.onModalSwitch(this.props.id, modalType);
    };
  }

  render() {
    const {done, fixed, moreDefault} = this.props;

    let moreClassName = moreDefault ? `more` : `more more--active`;

    return (
      <div className={moreClassName}>
        <ul className="more__list">
          {
            done ? <li className="more__item more__item--undone">
              <a className="more__link" href="#" onClick={this.onUndoneLinkClick}>
                <svg className="more__icon" width="14" height="10" viewBox="0 0 14 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.4167 0H3.63906C3.44249 0 3.25932 0.094453 3.15082 0.251119L0.0953799 4.69556C-0.0317933 4.88056 -0.0317933 5.11944 0.0953799 5.30444L3.15082 9.74888C3.25932 9.90555 3.44249 10 3.63906 10H13.4167C13.7393 10 14 9.75167 14 9.44445V0.555571C14 0.248333 13.7393 0 13.4167 0ZM10.9125 7.61498C10.7987 7.72331 10.6494 7.77777 10.5001 7.77777C10.3507 7.77777 10.2014 7.72331 10.0877 7.61498L8.16677 5.78553L6.24588 7.61498C6.13213 7.72331 5.98281 7.77777 5.83346 7.77777C5.68414 7.77777 5.53479 7.72331 5.42104 7.61498C5.19297 7.39777 5.19297 7.04665 5.42104 6.82944L7.34193 4.99999L5.42104 3.17054C5.19297 2.95333 5.19297 2.60221 5.42104 2.38499C5.64911 2.16778 6.01778 2.16778 6.24585 2.38499L8.16674 4.21444L10.0876 2.38499C10.3157 2.16778 10.6844 2.16778 10.9124 2.38499C11.1405 2.60221 11.1405 2.95333 10.9124 3.17054L8.99155 4.99999L10.9125 6.82944C11.1406 7.04665 11.1406 7.39777 10.9125 7.61498Z"
                    fill="white" />
                </svg>Невыполненное</a>
            </li> :
              <Fragment>
                <li className="more__item more__item--edit">
                  <a className="more__link" href="#" data-type="edit" onClick={this.onEditLinkClick}>
                    <svg className="more__icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.21825 1.66887L8.25247 3.71304L3.10329 8.88745L1.07021 6.84328L6.21825 1.66887ZM9.79606 1.17586L8.88887 0.264235C8.53827 -0.0880783 7.96898 -0.0880783 7.61719 0.264235L6.21825 1.66887L7.28283 2.73866L8.25247 3.71304L9.79606 2.16307C10.068 1.8898 10.068 1.44912 9.79606 1.17586ZM0.00566077 9.71652C-0.0313595 9.88395 0.119066 10.034 0.285695 9.99325L2.5525 9.44095L0.519426 7.39678L0.00566077 9.71652Z"
                        fill="white" />
                    </svg>Редактировать</a>
                </li>
                <li className="more__item more__item--fixed">
                  <a className="more__link" href="#" onClick={this.onFixedLinkClick}>
                    <svg className="more__icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.83261 9.881C3.75282 9.881 3.673 9.85091 3.61167 9.79053C3.48769 9.6685 3.48609 9.4691 3.60813 9.34509L8.85753 4.0115C9.53994 3.31811 9.5428 2.19278 8.86384 1.50292L8.62736 1.26263C8.30131 0.931346 7.86756 0.748934 7.406 0.748934C6.94089 0.748934 6.50289 0.933746 6.17263 1.26927L0.955077 6.51313C0.521265 6.95384 0.519419 7.67105 0.95203 8.11065L1.11552 8.27675C1.33347 8.49821 1.63958 8.62523 1.95535 8.62523C2.2502 8.62523 2.5208 8.51526 2.71737 8.31555L7.40116 3.55661C7.57758 3.37734 7.57862 3.08665 7.40338 2.90861L7.31608 2.81986C7.23331 2.73576 7.12333 2.68945 7.00646 2.68945C6.88836 2.68945 6.77688 2.73666 6.69254 2.82232L2.36338 7.22108C2.24134 7.34503 2.04194 7.34663 1.91794 7.22462C1.79396 7.10262 1.79236 6.90319 1.9144 6.77918L6.24362 2.38045C6.44732 2.17348 6.71826 2.05951 7.00649 2.05951C7.2935 2.05951 7.5629 2.17262 7.76506 2.37802L7.85236 2.46679C8.26737 2.88839 8.26636 3.57554 7.85012 3.99846L3.16638 8.75742C2.85045 9.0784 2.42043 9.25518 1.95541 9.25518C1.47197 9.25518 1.00225 9.05963 0.666597 8.71859L0.50311 8.55252C-0.169362 7.86925 -0.167454 6.75564 0.507357 6.07L5.72491 0.82617C6.17331 0.370542 6.77076 0.118988 7.40603 0.118988C8.03773 0.118988 8.63096 0.368234 9.07634 0.820785L9.31282 1.06108C10.2315 1.99458 10.2287 3.51637 9.30645 4.45341L4.05708 9.78697C3.99545 9.84958 3.91403 9.881 3.83261 9.881Z"
                        fill="white" />
                    </svg>{fixed ? `Открепить` : `Закрепить`}</a>
                </li>
              </Fragment>
          }
          <li className="more__item more__item--delete">
            <a className="more__link" href="#" data-type="delete" onClick={this.onDeleteLinkClick}>
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
  }
}

More.propTypes = {
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  moreDefault: PropTypes.bool.isRequired,
  onDoneSwitch: PropTypes.func.isRequired,
  onTaskFixed: PropTypes.func.isRequired,
  onMoreSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired
};
