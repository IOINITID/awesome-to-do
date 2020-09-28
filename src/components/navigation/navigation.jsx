import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    const {onMenuSwitch, onModalSwitch} = this.props;

    return (
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <button className="button" type="button" onClick={onMenuSwitch}>
              <svg className="button__icon" width="19" height="16" viewBox="0 0 19 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M0 1.33333C0 0.979711 0.142984 0.640573 0.397498 0.390525C0.652012 0.140476 0.997206 0 1.35714 0H17.6429C18.0028 0 18.348 0.140476 18.6025 0.390525C18.857 0.640573 19 0.979711 19 1.33333C19 1.68696 18.857 2.02609 18.6025 2.27614C18.348 2.52619 18.0028 2.66667 17.6429 2.66667H1.35714C0.997206 2.66667 0.652012 2.52619 0.397498 2.27614C0.142984 2.02609 0 1.68696 0 1.33333ZM0 8C0 7.64638 0.142984 7.30724 0.397498 7.05719C0.652012 6.80714 0.997206 6.66667 1.35714 6.66667H9.5C9.85994 6.66667 10.2051 6.80714 10.4596 7.05719C10.7142 7.30724 10.8571 7.64638 10.8571 8C10.8571 8.35362 10.7142 8.69276 10.4596 8.94281C10.2051 9.19286 9.85994 9.33333 9.5 9.33333H1.35714C0.997206 9.33333 0.652012 9.19286 0.397498 8.94281C0.142984 8.69276 0 8.35362 0 8ZM0 14.6667C0 14.313 0.142984 13.9739 0.397498 13.7239C0.652012 13.4738 0.997206 13.3333 1.35714 13.3333H17.6429C18.0028 13.3333 18.348 13.4738 18.6025 13.7239C18.857 13.9739 19 14.313 19 14.6667C19 15.0203 18.857 15.3594 18.6025 15.6095C18.348 15.8595 18.0028 16 17.6429 16H1.35714C0.997206 16 0.652012 15.8595 0.397498 15.6095C0.142984 15.3594 0 15.0203 0 14.6667Z"
                  fill="white" />
              </svg>
            </button>
          </li>
          <li className="navigation__item">
            <button className="button" type="button" onClick={onModalSwitch}>
              <svg className="button__icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8C16 8.73733 15.936 9.33333 15.1987 9.33333H9.33333V15.1987C9.33333 15.9347 8.73733 16 8 16C7.26267 16 6.66667 15.9347 6.66667 15.1987V9.33333H0.801333C0.0653331 9.33333 0 8.73733 0 8C0 7.26267 0.0653331 6.66667 0.801333 6.66667H6.66667V0.801333C6.66667 0.0639998 7.26267 0 8 0C8.73733 0 9.33333 0.0639998 9.33333 0.801333V6.66667H15.1987C15.936 6.66667 16 7.26267 16 8Z"
                  fill="white" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  onMenuSwitch: PropTypes.func.isRequired,
  onModalSwitch: PropTypes.func.isRequired
};
