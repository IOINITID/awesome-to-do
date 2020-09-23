import React, {Component, Fragment} from 'react';
// import PropTypes from 'prop-types';
// import './task.css';

export default class Task extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();
  }

  render() {
    const {title, isDone, isFixed, onDelete, onDone, onFixed} = this.props;

    // let itemClassName = isDone ? `item item--done` : `item`;
    // let itemAddStyles = isFixed ? {fontWeight: 700} : {fontWeight: 400};

    return (
      <Fragment>
        <p className="tasks__description">{title}</p>
        {
          isDone ? null : <button className="button tasks__done" type="button">
            <svg className="button__icon" width="22" height="17" viewBox="0 0 22 17" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.42857L7.4 15L20 2" stroke="white" strokeWidth="3" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </button>
        }
        <button className="button tasks__more" type="button">
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
        <div className="more">
          <ul className="more__list">
            <li className="more__item more__item--edit">
              <a className="more__link" href="#">
                <svg className="more__icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.21825 1.66887L8.25247 3.71304L3.10329 8.88745L1.07021 6.84328L6.21825 1.66887ZM9.79606 1.17586L8.88887 0.264235C8.53827 -0.0880783 7.96898 -0.0880783 7.61719 0.264235L6.21825 1.66887L7.28283 2.73866L8.25247 3.71304L9.79606 2.16307C10.068 1.8898 10.068 1.44912 9.79606 1.17586ZM0.00566077 9.71652C-0.0313595 9.88395 0.119066 10.034 0.285695 9.99325L2.5525 9.44095L0.519426 7.39678L0.00566077 9.71652Z"
                    fill="white" />
                </svg>Редактировать</a>
            </li>
            <li className="more__item more__item--fixed">
              <a className="more__link" href="#">
                <svg className="more__icon" width="10" height="10" viewBox="0 0 10 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.83261 9.881C3.75282 9.881 3.673 9.85091 3.61167 9.79053C3.48769 9.6685 3.48609 9.4691 3.60813 9.34509L8.85753 4.0115C9.53994 3.31811 9.5428 2.19278 8.86384 1.50292L8.62736 1.26263C8.30131 0.931346 7.86756 0.748934 7.406 0.748934C6.94089 0.748934 6.50289 0.933746 6.17263 1.26927L0.955077 6.51313C0.521265 6.95384 0.519419 7.67105 0.95203 8.11065L1.11552 8.27675C1.33347 8.49821 1.63958 8.62523 1.95535 8.62523C2.2502 8.62523 2.5208 8.51526 2.71737 8.31555L7.40116 3.55661C7.57758 3.37734 7.57862 3.08665 7.40338 2.90861L7.31608 2.81986C7.23331 2.73576 7.12333 2.68945 7.00646 2.68945C6.88836 2.68945 6.77688 2.73666 6.69254 2.82232L2.36338 7.22108C2.24134 7.34503 2.04194 7.34663 1.91794 7.22462C1.79396 7.10262 1.79236 6.90319 1.9144 6.77918L6.24362 2.38045C6.44732 2.17348 6.71826 2.05951 7.00649 2.05951C7.2935 2.05951 7.5629 2.17262 7.76506 2.37802L7.85236 2.46679C8.26737 2.88839 8.26636 3.57554 7.85012 3.99846L3.16638 8.75742C2.85045 9.0784 2.42043 9.25518 1.95541 9.25518C1.47197 9.25518 1.00225 9.05963 0.666597 8.71859L0.50311 8.55252C-0.169362 7.86925 -0.167454 6.75564 0.507357 6.07L5.72491 0.82617C6.17331 0.370542 6.77076 0.118988 7.40603 0.118988C8.03773 0.118988 8.63096 0.368234 9.07634 0.820785L9.31282 1.06108C10.2315 1.99458 10.2287 3.51637 9.30645 4.45341L4.05708 9.78697C3.99545 9.84958 3.91403 9.881 3.83261 9.881Z"
                    fill="white" />
                </svg>Закрепить</a>
            </li>
            <li className="more__item more__item--delete">
              <a className="more__link" href="#">
                <svg className="more__icon" width="8" height="10" viewBox="0 0 8 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.571429 8.88889C0.571429 9.5 1.08571 10 1.71429 10H6.28571C6.91429 10 7.42857 9.5 7.42857 8.88889V2.22222H0.571429V8.88889ZM8 0.555556H6L5.42857 0H2.57143L2 0.555556H0V1.66667H8V0.555556Z"
                    fill="white" />
                </svg>Удалить</a>
            </li>
          </ul>
        </div>
      </Fragment>
      // <p className={itemClassName}>
      //   <span onClick={onDone} className="item__title" style={itemAddStyles}>{title}</span>
      //   <button onClick={onDelete} className="item__delete">Delete</button>
      //   <button onClick={onFixed} className="item__add">Add</button>
      // </p>
    );
  }
}

// Task.propTypes = {
//   title: PropTypes.string.isRequired,
//   isDone: PropTypes.bool.isRequired,
//   isFixed: PropTypes.bool.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onDone: PropTypes.func.isRequired,
//   onFixed: PropTypes.func.isRequired
// };
