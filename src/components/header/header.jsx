import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './header.css';

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  constructor() {
    super();

    this.state = {
      isFormActive: false,
      isThemeDefault: true
    };

    this.onFormButtonClick = (evt) => {
      evt.preventDefault();

      this.setState((state) => {
        return {
          isFormActive: !state.isFormActive
        };
      });
    };

    this.onThemeButtonClick = (evt) => {
      evt.preventDefault();

      this.setState((state) => {
        return {
          isThemeDefault: !state.isThemeDefault
        };
      });
    };
  }

  render() {
    const {isFormActive, isThemeDefault} = this.state;
    // const {toDoQuantity, toDoDone} = this.props;

    let formClassName = isFormActive ? `form form--active` : `form`;
    let themeClassName = isThemeDefault ? `theme theme--dark` : `theme theme--light`;

    return (
      <header className="header container container--flex">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <button className="navigation__link" type="button">
                <svg className="navigation__icon" width="19" height="16" viewBox="0 0 19 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M0 1.33333C0 0.979711 0.142984 0.640573 0.397498 0.390525C0.652012 0.140476 0.997206 0 1.35714 0H17.6429C18.0028 0 18.348 0.140476 18.6025 0.390525C18.857 0.640573 19 0.979711 19 1.33333C19 1.68696 18.857 2.02609 18.6025 2.27614C18.348 2.52619 18.0028 2.66667 17.6429 2.66667H1.35714C0.997206 2.66667 0.652012 2.52619 0.397498 2.27614C0.142984 2.02609 0 1.68696 0 1.33333ZM0 8C0 7.64638 0.142984 7.30724 0.397498 7.05719C0.652012 6.80714 0.997206 6.66667 1.35714 6.66667H9.5C9.85994 6.66667 10.2051 6.80714 10.4596 7.05719C10.7142 7.30724 10.8571 7.64638 10.8571 8C10.8571 8.35362 10.7142 8.69276 10.4596 8.94281C10.2051 9.19286 9.85994 9.33333 9.5 9.33333H1.35714C0.997206 9.33333 0.652012 9.19286 0.397498 8.94281C0.142984 8.69276 0 8.35362 0 8ZM0 14.6667C0 14.313 0.142984 13.9739 0.397498 13.7239C0.652012 13.4738 0.997206 13.3333 1.35714 13.3333H17.6429C18.0028 13.3333 18.348 13.4738 18.6025 13.7239C18.857 13.9739 19 14.313 19 14.6667C19 15.0203 18.857 15.3594 18.6025 15.6095C18.348 15.8595 18.0028 16 17.6429 16H1.35714C0.997206 16 0.652012 15.8595 0.397498 15.6095C0.142984 15.3594 0 15.0203 0 14.6667Z"
                    fill="white" />
                </svg>
              </button>
            </li>
            <li className="navigation__item">
              <button className="navigation__link" type="button">
                <svg className="navigation__icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8C16 8.73733 15.936 9.33333 15.1987 9.33333H9.33333V15.1987C9.33333 15.9347 8.73733 16 8 16C7.26267 16 6.66667 15.9347 6.66667 15.1987V9.33333H0.801333C0.0653331 9.33333 0 8.73733 0 8C0 7.26267 0.0653331 6.66667 0.801333 6.66667H6.66667V0.801333C6.66667 0.0639998 7.26267 0 8 0C8.73733 0 9.33333 0.0639998 9.33333 0.801333V6.66667H15.1987C15.936 6.66667 16 7.26267 16 8Z"
                    fill="white" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
        <form className={formClassName}>
          <label className="from__label" htmlFor="search-field">
            <button className="form__button" onClick={this.onFormButtonClick} type="button">
              <svg className="form__icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.1468 9.4944C13.1058 6.78231 12.4506 3.02685 9.68429 1.10668C6.91795 -0.813486 3.08739 -0.171595 1.12882 2.54096C-0.829756 5.25305 -0.175027 9.00805 2.59178 10.9282C4.56626 12.2987 7.17676 12.4043 9.25935 11.1985L13.7844 15.6082C14.273 16.1124 15.0859 16.1326 15.6003 15.6536C16.1146 15.1751 16.1352 14.3781 15.6471 13.8739C15.6316 13.8578 15.6166 13.8431 15.6003 13.828L11.1468 9.4944ZM6.13406 9.90551C3.94804 9.90597 2.17573 8.16978 2.17432 6.02663C2.17386 3.88347 3.94476 2.14591 6.13125 2.145C8.31446 2.14408 10.0858 3.87751 10.09 6.01791C10.0938 8.16153 8.32382 9.90184 6.13686 9.90551C6.13593 9.90551 6.13546 9.90551 6.13406 9.90551Z"
                  fill="white" />
              </svg>
            </button>
            <input className="from__search" type="search" name="search" id="search-field" placeholder="Поиск по задачам" />
          </label>
        </form>
        <div className={themeClassName}>
          <button className="theme__button" onClick={this.onThemeButtonClick}>
            <svg className="theme__icon theme__icon--moon" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0C3.58881 0 0 3.58875 0 8C0 12.4113 3.58881 16 8 16C12.4112 16 16 12.4113 16 8C16 3.58875 12.4112 0 8 0ZM5.74741 12.8247C6.2065 13.431 6.75241 13.9681 7.36062 14.42C4.10225 14.0979 1.54838 11.3417 1.54838 8C1.54838 4.65831 4.10225 1.90209 7.36069 1.58003C6.75247 2.03191 6.20653 2.56903 5.74747 3.17528C4.68869 4.57347 4.12903 6.24188 4.12903 8C4.12903 9.75813 4.68866 11.4265 5.74741 12.8247Z"
                fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="-1.52737e-07" y1="2" x2="27" y2="22.5"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9E4B0" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

          </button>
          <svg className="theme__icon theme__icon--sun" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99881 2.70334C5.07408 2.70334 2.70312 5.0743 2.70312 7.99903C2.70312 10.9238 5.07408 13.2947 7.99881 13.2947C10.9235 13.2947 13.2945 10.9238 13.2945 7.99903C13.2913 5.07564 10.9222 2.70656 7.99881 2.70334ZM6.43101 4.12203C4.84844 4.75755 3.81317 6.29362 3.81801 7.99903C3.81801 8.15296 3.69322 8.27775 3.53929 8.27775C3.38535 8.27775 3.26057 8.15296 3.26057 7.99903C3.25512 6.06629 4.42842 4.32548 6.22197 3.60528C6.36437 3.54879 6.52567 3.61782 6.58312 3.75984C6.64057 3.90185 6.57263 4.06361 6.43101 4.12203ZM7.99881 3.81822C7.82402 3.8182 7.64939 3.829 7.47593 3.85055C7.46439 3.85212 7.45274 3.85286 7.44109 3.85278C7.29417 3.85231 7.17285 3.73788 7.16379 3.59124C7.15474 3.4446 7.26107 3.31611 7.40681 3.29757C7.60318 3.27299 7.8009 3.2607 7.99881 3.26078C8.15274 3.26078 8.27753 3.38557 8.27753 3.5395C8.27753 3.69343 8.15274 3.81822 7.99881 3.81822Z"
              fill="url(#paint0_linear)" fillOpacity="0.5" />
            <path
              d="M14.6471 9.32127C14.6738 9.18733 14.7469 9.06712 14.8536 8.98179L15.9459 8.10773C15.9789 8.08127 15.9981 8.04129 15.9981 7.99902C15.9981 7.95676 15.9789 7.91677 15.9459 7.89032L14.8536 7.01626C14.7469 6.93093 14.6738 6.81072 14.6471 6.67678C14.6203 6.5428 14.6418 6.40368 14.7078 6.28406L15.3826 5.05769C15.4031 5.02055 15.4055 4.9761 15.3893 4.93694C15.373 4.89777 15.3398 4.86815 15.299 4.85645L13.9553 4.46624C13.8241 4.42829 13.7106 4.34516 13.6348 4.23156C13.5588 4.11803 13.5254 3.9813 13.5405 3.84553L13.695 2.455C13.6996 2.41294 13.6849 2.37104 13.655 2.34112C13.6251 2.31119 13.5832 2.29649 13.5411 2.30115L12.1506 2.45556C12.0148 2.47068 11.8781 2.43731 11.7645 2.36135C11.6509 2.28555 11.5678 2.17201 11.5299 2.04082L11.1396 0.69711C11.128 0.656343 11.0983 0.623119 11.0592 0.606846C11.02 0.590572 10.9756 0.593019 10.9384 0.613494L9.71204 1.28828C9.59242 1.35428 9.4533 1.3758 9.31933 1.34904C9.18539 1.32229 9.06517 1.24916 8.97985 1.14251L8.10773 0.0521514C8.08128 0.0191828 8.04129 0 7.99903 0C7.95676 0 7.91678 0.0191828 7.89033 0.0521514L7.01626 1.14446C6.93093 1.25111 6.81072 1.32424 6.67678 1.35099C6.5428 1.37776 6.40368 1.35623 6.28406 1.29023L5.05769 0.615445C5.02055 0.59497 4.9761 0.592523 4.93694 0.608797C4.89777 0.62507 4.86815 0.658294 4.85645 0.699061L4.46625 2.04277C4.4283 2.17396 4.34517 2.2875 4.23156 2.3633C4.11803 2.43926 3.9813 2.47263 3.84554 2.45751L2.455 2.3031C2.41294 2.29844 2.37104 2.31314 2.34112 2.34307C2.31119 2.37299 2.29649 2.41489 2.30115 2.45695L2.45556 3.84749C2.47068 3.98325 2.43731 4.11998 2.36135 4.23351C2.28555 4.34712 2.17201 4.43025 2.04082 4.4682L0.69711 4.8584C0.656343 4.8701 0.62312 4.89972 0.606846 4.93889C0.590572 4.97805 0.593019 5.0225 0.613494 5.05964L1.28828 6.28601C1.35428 6.40563 1.3758 6.54475 1.34904 6.67873C1.32229 6.81267 1.24916 6.93288 1.14251 7.01821L0.0521514 7.89032C0.0191828 7.91677 0 7.95676 0 7.99902C0 8.04129 0.0191828 8.08127 0.0521514 8.10773L1.14446 8.98179C1.25111 9.06712 1.32424 9.18733 1.35099 9.32127C1.37776 9.45525 1.35623 9.59437 1.29023 9.71399L0.615445 10.9404C0.59497 10.9775 0.592523 11.0219 0.608797 11.0611C0.625071 11.1003 0.658294 11.1299 0.699061 11.1416L2.04277 11.5318C2.17396 11.5698 2.2875 11.6529 2.3633 11.7665C2.43926 11.88 2.47263 12.0168 2.45751 12.1525L2.3031 13.543C2.29844 13.5851 2.31314 13.627 2.34307 13.6569C2.37299 13.6869 2.41489 13.7016 2.45695 13.6969L3.84749 13.5425C3.98325 13.5274 4.11998 13.5607 4.23351 13.6367C4.34712 13.7125 4.43025 13.826 4.4682 13.9572L4.85841 15.3009C4.8701 15.3417 4.89972 15.3749 4.93889 15.3912C4.97806 15.4075 5.0225 15.405 5.05964 15.3846L6.28601 14.7098C6.40563 14.6438 6.54475 14.6222 6.67873 14.649C6.81267 14.6758 6.93288 14.7489 7.01821 14.8555L7.89228 15.9478C7.91873 15.9808 7.95871 16 8.00098 16C8.04325 16 8.08323 15.9808 8.10968 15.9478L8.98375 14.8555C9.06908 14.7489 9.18929 14.6758 9.32323 14.649C9.4572 14.6222 9.59632 14.6438 9.71595 14.7098L10.9423 15.3846C10.9795 15.405 11.0239 15.4075 11.0631 15.3912C11.1022 15.3749 11.1319 15.3417 11.1436 15.3009L11.5338 13.9572C11.5717 13.826 11.6548 13.7125 11.7684 13.6367C11.882 13.5607 12.0187 13.5274 12.1545 13.5425L13.545 13.6969C13.5871 13.7016 13.629 13.6869 13.6589 13.6569C13.6888 13.627 13.7035 13.5851 13.6989 13.543L13.5408 12.152C13.5257 12.0162 13.5591 11.8795 13.635 11.7659C13.7108 11.6523 13.8244 11.5692 13.9556 11.5312L15.2993 11.141C15.34 11.1293 15.3733 11.0997 15.3895 11.0606C15.4058 11.0214 15.4034 10.9769 15.3829 10.9398L14.7081 9.71343C14.6421 9.59381 14.6206 9.45469 14.6473 9.32072L14.6471 9.32127ZM7.99903 13.8522C4.76643 13.8522 2.1459 11.2316 2.1459 7.99902C2.1459 4.76643 4.76643 2.1459 7.99903 2.1459C11.2316 2.1459 13.8522 4.76643 13.8522 7.99902C13.8486 11.2302 11.2302 13.8486 7.99903 13.8522Z"
              fill="url(#paint1_linear)" fillOpacity="0.5" />
            <defs>
              <linearGradient id="paint0_linear" x1="2.70312" y1="4.02726" x2="20.5761" y2="17.5975"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9E4B0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="-1.52718e-07" y1="2" x2="26.9991" y2="22.4968"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9E4B0" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

        </div>
        <a className="logo" href="#">
          <svg className="logo__icon" width="92" height="65" viewBox="0 0 92 65" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.784 28.868H0.456V33.352H6.384V56H11.856V33.352H17.784V28.868ZM25.0598 42.434C25.0598 40.61 25.0978 39.0647 25.1738 37.798C25.2751 36.5313 25.4525 35.4927 25.7058 34.682C25.9845 33.8713 26.3645 33.2887 26.8458 32.934C27.3525 32.554 28.0111 32.364 28.8218 32.364C29.6325 32.364 30.2785 32.554 30.7598 32.934C31.2665 33.2887 31.6465 33.8713 31.8998 34.682C32.1785 35.4927 32.3558 36.5313 32.4318 37.798C32.5331 39.0647 32.5838 40.61 32.5838 42.434C32.5838 44.258 32.5331 45.816 32.4318 47.108C32.3558 48.3747 32.1785 49.4133 31.8998 50.224C31.6465 51.0093 31.2665 51.592 30.7598 51.972C30.2785 52.3267 29.6325 52.504 28.8218 52.504C28.0111 52.504 27.3525 52.3267 26.8458 51.972C26.3645 51.592 25.9845 51.0093 25.7058 50.224C25.4525 49.4133 25.2751 48.3747 25.1738 47.108C25.0978 45.816 25.0598 44.258 25.0598 42.434ZM19.5878 42.434C19.5878 44.5113 19.6765 46.4113 19.8538 48.134C20.0565 49.8567 20.4745 51.3387 21.1078 52.58C21.7665 53.8213 22.7038 54.7713 23.9198 55.43C25.1358 56.0887 26.7698 56.418 28.8218 56.418C30.8738 56.418 32.5078 56.0887 33.7238 55.43C34.9398 54.7713 35.8645 53.8213 36.4978 52.58C37.1565 51.3387 37.5745 49.8567 37.7518 48.134C37.9545 46.4113 38.0558 44.5113 38.0558 42.434C38.0558 40.382 37.9545 38.4947 37.7518 36.772C37.5745 35.024 37.1565 33.5293 36.4978 32.288C35.8645 31.0467 34.9398 30.084 33.7238 29.4C32.5078 28.6907 30.8738 28.336 28.8218 28.336C26.7698 28.336 25.1358 28.6907 23.9198 29.4C22.7038 30.084 21.7665 31.0467 21.1078 32.288C20.4745 33.5293 20.0565 35.024 19.8538 36.772C19.6765 38.4947 19.5878 40.382 19.5878 42.434ZM56.14 51.972V32.896H58.458C59.4966 32.896 60.32 33.0987 60.928 33.504C61.5613 33.884 62.03 34.4667 62.334 35.252C62.6633 36.012 62.8786 36.9747 62.98 38.14C63.0813 39.3053 63.132 40.6607 63.132 42.206C63.132 44.0553 63.0686 45.6007 62.942 46.842C62.8406 48.0833 62.6126 49.084 62.258 49.844C61.9286 50.604 61.4726 51.1487 60.89 51.478C60.3073 51.8073 59.5346 51.972 58.572 51.972H56.14ZM50.668 28.868V56H59.294C61.118 56 62.6253 55.7213 63.816 55.164C65.0066 54.6067 65.9566 53.758 66.666 52.618C67.3753 51.478 67.8693 50.034 68.148 48.286C68.452 46.5127 68.604 44.4353 68.604 42.054C68.604 40.0527 68.49 38.2413 68.262 36.62C68.034 34.9987 67.5906 33.618 66.932 32.478C66.2986 31.3127 65.3993 30.426 64.234 29.818C63.0686 29.1847 61.536 28.868 59.636 28.868H50.668ZM77.1243 42.434C77.1243 40.61 77.1623 39.0647 77.2383 37.798C77.3396 36.5313 77.5169 35.4927 77.7703 34.682C78.0489 33.8713 78.4289 33.2887 78.9103 32.934C79.4169 32.554 80.0756 32.364 80.8863 32.364C81.6969 32.364 82.3429 32.554 82.8243 32.934C83.3309 33.2887 83.7109 33.8713 83.9643 34.682C84.2429 35.4927 84.4203 36.5313 84.4963 37.798C84.5976 39.0647 84.6483 40.61 84.6483 42.434C84.6483 44.258 84.5976 45.816 84.4963 47.108C84.4203 48.3747 84.2429 49.4133 83.9643 50.224C83.7109 51.0093 83.3309 51.592 82.8243 51.972C82.3429 52.3267 81.6969 52.504 80.8863 52.504C80.0756 52.504 79.4169 52.3267 78.9103 51.972C78.4289 51.592 78.0489 51.0093 77.7703 50.224C77.5169 49.4133 77.3396 48.3747 77.2383 47.108C77.1623 45.816 77.1243 44.258 77.1243 42.434ZM71.6523 42.434C71.6523 44.5113 71.7409 46.4113 71.9183 48.134C72.1209 49.8567 72.5389 51.3387 73.1723 52.58C73.8309 53.8213 74.7683 54.7713 75.9843 55.43C77.2003 56.0887 78.8343 56.418 80.8863 56.418C82.9383 56.418 84.5723 56.0887 85.7883 55.43C87.0043 54.7713 87.9289 53.8213 88.5623 52.58C89.2209 51.3387 89.6389 49.8567 89.8163 48.134C90.0189 46.4113 90.1203 44.5113 90.1203 42.434C90.1203 40.382 90.0189 38.4947 89.8163 36.772C89.6389 35.024 89.2209 33.5293 88.5623 32.288C87.9289 31.0467 87.0043 30.084 85.7883 29.4C84.5723 28.6907 82.9383 28.336 80.8863 28.336C78.8343 28.336 77.2003 28.6907 75.9843 29.4C74.7683 30.084 73.8309 31.0467 73.1723 32.288C72.5389 33.5293 72.1209 35.024 71.9183 36.772C71.7409 38.4947 71.6523 40.382 71.6523 42.434Z"
              fill="white" />
            <path
              d="M8.656 16.082L7.138 9.02H7.094L5.576 16.082H8.656ZM9.074 6.292L13.232 22H9.932L9.206 18.678H5.026L4.3 22H1L5.158 6.292H9.074ZM12.9709 6.292L15.8309 22H19.3729L21.1329 10.604H21.1769L22.9369 22H26.4789L29.3389 6.292H26.3029L24.5649 17.908H24.5209L22.6729 6.292H19.6369L17.7889 17.908H17.7449L16.0069 6.292H12.9709ZM39.3878 6.292H30.6098V22H39.6078V19.404H33.7778V15.18H39.0578V12.584H33.7778V8.888H39.3878V6.292ZM43.7536 17.094H40.5856V17.732C40.5856 19.184 40.9669 20.2987 41.7296 21.076C42.5069 21.8533 43.7902 22.242 45.5796 22.242C47.2956 22.242 48.6302 21.868 49.5836 21.12C50.5516 20.3573 51.0356 19.1473 51.0356 17.49C51.0356 17.006 50.9916 16.566 50.9036 16.17C50.8156 15.774 50.6542 15.4147 50.4196 15.092C50.1996 14.7547 49.8989 14.4467 49.5176 14.168C49.1362 13.8747 48.6449 13.596 48.0436 13.332L45.6016 12.276C44.9269 11.9973 44.4869 11.6967 44.2816 11.374C44.0762 11.0367 43.9736 10.626 43.9736 10.142C43.9736 9.90733 43.9956 9.68 44.0396 9.46C44.0982 9.24 44.1936 9.04933 44.3256 8.888C44.4722 8.712 44.6629 8.57267 44.8976 8.47C45.1322 8.36733 45.4256 8.316 45.7776 8.316C46.3936 8.316 46.8336 8.52133 47.0976 8.932C47.3616 9.328 47.4936 9.9 47.4936 10.648H50.5296V10.208C50.5296 9.46 50.4049 8.822 50.1556 8.294C49.9209 7.75133 49.5836 7.31133 49.1436 6.974C48.7182 6.622 48.2049 6.37267 47.6036 6.226C47.0169 6.06467 46.3716 5.984 45.6676 5.984C44.1569 5.984 42.9689 6.36533 42.1036 7.128C41.2382 7.89067 40.8056 9.04933 40.8056 10.604C40.8056 11.2493 40.8862 11.8213 41.0476 12.32C41.2089 12.804 41.4582 13.2367 41.7956 13.618C42.1476 13.9847 42.5802 14.3073 43.0936 14.586C43.6069 14.8647 44.2156 15.1213 44.9196 15.356C45.4476 15.532 45.8876 15.708 46.2396 15.884C46.6062 16.0453 46.8996 16.2287 47.1196 16.434C47.3396 16.6393 47.4936 16.874 47.5816 17.138C47.6842 17.3873 47.7356 17.688 47.7356 18.04C47.7356 18.7 47.5376 19.1913 47.1416 19.514C46.7602 19.822 46.3276 19.976 45.8436 19.976C45.4329 19.976 45.0882 19.9173 44.8096 19.8C44.5456 19.6827 44.3329 19.5213 44.1716 19.316C44.0102 19.1107 43.9002 18.8613 43.8416 18.568C43.7829 18.26 43.7536 17.9227 43.7536 17.556V17.094ZM55.4478 14.146C55.4478 13.09 55.4698 12.1953 55.5138 11.462C55.5724 10.7287 55.6751 10.1273 55.8218 9.658C55.9831 9.18867 56.2031 8.85133 56.4818 8.646C56.7751 8.426 57.1564 8.316 57.6258 8.316C58.0951 8.316 58.4691 8.426 58.7478 8.646C59.0411 8.85133 59.2611 9.18867 59.4078 9.658C59.5691 10.1273 59.6718 10.7287 59.7158 11.462C59.7744 12.1953 59.8038 13.09 59.8038 14.146C59.8038 15.202 59.7744 16.104 59.7158 16.852C59.6718 17.5853 59.5691 18.1867 59.4078 18.656C59.2611 19.1107 59.0411 19.448 58.7478 19.668C58.4691 19.8733 58.0951 19.976 57.6258 19.976C57.1564 19.976 56.7751 19.8733 56.4818 19.668C56.2031 19.448 55.9831 19.1107 55.8218 18.656C55.6751 18.1867 55.5724 17.5853 55.5138 16.852C55.4698 16.104 55.4478 15.202 55.4478 14.146ZM52.2798 14.146C52.2798 15.3487 52.3311 16.4487 52.4338 17.446C52.5511 18.4433 52.7931 19.3013 53.1598 20.02C53.5411 20.7387 54.0838 21.2887 54.7878 21.67C55.4918 22.0513 56.4378 22.242 57.6258 22.242C58.8138 22.242 59.7598 22.0513 60.4638 21.67C61.1678 21.2887 61.7031 20.7387 62.0698 20.02C62.4511 19.3013 62.6931 18.4433 62.7958 17.446C62.9131 16.4487 62.9718 15.3487 62.9718 14.146C62.9718 12.958 62.9131 11.8653 62.7958 10.868C62.6931 9.856 62.4511 8.99067 62.0698 8.272C61.7031 7.55333 61.1678 6.996 60.4638 6.6C59.7598 6.18933 58.8138 5.984 57.6258 5.984C56.4378 5.984 55.4918 6.18933 54.7878 6.6C54.0838 6.996 53.5411 7.55333 53.1598 8.272C52.7931 8.99067 52.5511 9.856 52.4338 10.868C52.3311 11.8653 52.2798 12.958 52.2798 14.146ZM64.9004 6.292V22H67.8044V9.46H67.8484L70.6424 22H73.1064L75.9004 9.46H75.9444V22H78.8484V6.292H74.1624L71.8964 17.38H71.8524L69.6084 6.292H64.9004ZM89.8975 6.292H81.1195V22H90.1175V19.404H84.2875V15.18H89.5675V12.584H84.2875V8.888H89.8975V6.292Z"
              fill="white" />
          </svg>
        </a>
      </header>
    );
  }
}

Header.propTypes = {
  // toDoQuantity: PropTypes.number.isRequired,
  // toDoDone: PropTypes.number.isRequired
};
