import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Menu extends Component {
  constructor() {
    super();

    this.onAddLinkClick = (evt) => {
      evt.preventDefault();

      this.props.onModalSwitch();
    };
  }

  render() {
    const {itemsData, menuDefault} = this.props;
    const itemsAll = itemsData.length;
    const itemsDone = itemsData.filter((item) => item.done).length;
    const itemsNotDone = itemsData.filter((item) => !item.done).length;

    let menuClassName = menuDefault ? `menu` : `menu menu--active`;

    return (
      <section className={menuClassName}>
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#">Все задачи<sup className="menu__quantity">{itemsAll}</sup></a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Текущие<sup className="menu__quantity">{itemsNotDone}</sup></a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Выполненные<sup className="menu__quantity">{itemsDone}</sup></a>
          </li>
          <li className="menu__item menu__item--fixed">
            <a className="menu__link" href="#">
              <svg className="menu__icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M13.0971 12.1102L16.7924 8.41098C16.9616 8.24312 17.033 8.0009 16.9856 7.76718C16.9375 7.53415 16.7755 7.3401 16.554 7.25229C14.0468 6.25152 12.1481 6.46825 11.3435 6.64178L6.87892 2.83985C6.96738 1.33552 6.15923 0.310689 6.12172 0.263944C5.99646 0.107409 5.80964 0.0117947 5.60866 0.000473745C5.40979 -0.00659773 5.21166 0.0656442 5.07012 0.207273L0.207182 5.07441C0.0642475 5.21676 -0.0107859 5.41437 0.00125525 5.61622C0.0125666 5.81738 0.109526 6.00505 0.268052 6.12971C1.13704 6.82096 2.2233 6.89393 2.80005 6.87906L6.63269 11.3878C6.49327 12.1938 6.31355 14.1705 7.26178 16.5538C7.34952 16.7755 7.54271 16.937 7.77554 16.9858C7.82367 16.995 7.87107 17 7.91847 17C8.10459 17 8.28505 16.9271 8.41879 16.7925L12.0965 13.1117L15.7734 16.7925C15.9114 16.9306 16.0926 17 16.2737 17C16.4549 17 16.6361 16.9306 16.7741 16.7925C17.0507 16.5156 17.0507 16.0679 16.7741 15.791L13.0971 12.1102Z"
                    fill="#F9E4B0" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="17" height="17" fill="white" />
                  </clipPath>
                </defs>
              </svg>
                  Закреплённые</a>
          </li>
          <li className="menu__item menu__item--add">
            <a className="menu__link" href="#" onClick={this.onAddLinkClick}>
              <svg className="menu__icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.3359 7.83594H9.16406V0.664062C9.16406 0.297301 8.86676 0 8.5 0C8.13324 0 7.83594 0.297301 7.83594 0.664062V7.83594H0.664062C0.297301 7.83594 0 8.13324 0 8.5C0 8.86676 0.297301 9.16406 0.664062 9.16406H7.83594V16.3359C7.83594 16.7027 8.13324 17 8.5 17C8.86676 17 9.16406 16.7027 9.16406 16.3359V9.16406H16.3359C16.7027 9.16406 17 8.86676 17 8.5C17 8.13324 16.7027 7.83594 16.3359 7.83594Z"
                  fill="#85DC9D" />
              </svg>
                  Добавить задачу</a>
          </li>
        </ul>
      </section>
    );
  }
}

Menu.propTypes = {
  itemsData: PropTypes.array.isRequired,
  menuDefault: PropTypes.bool.isRequired,
  onModalSwitch: PropTypes.func.isRequired
};
