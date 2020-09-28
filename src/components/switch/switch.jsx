import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Switch extends Component {
  constructor() {
    super();
  }

  render() {
    const {onThemeSwitch} = this.props;

    return (
      <div className="switch">
        <button className="button switch__button" onClick={onThemeSwitch}>
          <svg className="button__icon button__icon--moon" width="16" height="16" viewBox="0 0 16 16" fill="none"
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
          <svg className="button__icon button__icon--sun" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99881 2.70334C5.07408 2.70334 2.70312 5.0743 2.70312 7.99903C2.70312 10.9238 5.07408 13.2947 7.99881 13.2947C10.9235 13.2947 13.2945 10.9238 13.2945 7.99903C13.2913 5.07564 10.9222 2.70656 7.99881 2.70334ZM6.43101 4.12203C4.84844 4.75755 3.81317 6.29362 3.81801 7.99903C3.81801 8.15296 3.69322 8.27775 3.53929 8.27775C3.38535 8.27775 3.26057 8.15296 3.26057 7.99903C3.25512 6.06629 4.42842 4.32548 6.22197 3.60528C6.36437 3.54879 6.52567 3.61782 6.58312 3.75984C6.64057 3.90185 6.57263 4.06361 6.43101 4.12203ZM7.99881 3.81822C7.82402 3.8182 7.64939 3.829 7.47593 3.85055C7.46439 3.85212 7.45274 3.85286 7.44109 3.85278C7.29417 3.85231 7.17285 3.73788 7.16379 3.59124C7.15474 3.4446 7.26107 3.31611 7.40681 3.29757C7.60318 3.27299 7.8009 3.2607 7.99881 3.26078C8.15274 3.26078 8.27753 3.38557 8.27753 3.5395C8.27753 3.69343 8.15274 3.81822 7.99881 3.81822Z"
              fill="url(#paint0_linear)" />
            <path
              d="M14.6471 9.32127C14.6738 9.18733 14.7469 9.06712 14.8536 8.98179L15.9459 8.10773C15.9789 8.08127 15.9981 8.04129 15.9981 7.99902C15.9981 7.95676 15.9789 7.91677 15.9459 7.89032L14.8536 7.01626C14.7469 6.93093 14.6738 6.81072 14.6471 6.67678C14.6203 6.5428 14.6418 6.40368 14.7078 6.28406L15.3826 5.05769C15.4031 5.02055 15.4055 4.9761 15.3893 4.93694C15.373 4.89777 15.3398 4.86815 15.299 4.85645L13.9553 4.46624C13.8241 4.42829 13.7106 4.34516 13.6348 4.23156C13.5588 4.11803 13.5254 3.9813 13.5405 3.84553L13.695 2.455C13.6996 2.41294 13.6849 2.37104 13.655 2.34112C13.6251 2.31119 13.5832 2.29649 13.5411 2.30115L12.1506 2.45556C12.0148 2.47068 11.8781 2.43731 11.7645 2.36135C11.6509 2.28555 11.5678 2.17201 11.5299 2.04082L11.1396 0.69711C11.128 0.656343 11.0983 0.623119 11.0592 0.606846C11.02 0.590572 10.9756 0.593019 10.9384 0.613494L9.71204 1.28828C9.59242 1.35428 9.4533 1.3758 9.31933 1.34904C9.18539 1.32229 9.06517 1.24916 8.97985 1.14251L8.10773 0.0521514C8.08128 0.0191828 8.04129 0 7.99903 0C7.95676 0 7.91678 0.0191828 7.89033 0.0521514L7.01626 1.14446C6.93093 1.25111 6.81072 1.32424 6.67678 1.35099C6.5428 1.37776 6.40368 1.35623 6.28406 1.29023L5.05769 0.615445C5.02055 0.59497 4.9761 0.592523 4.93694 0.608797C4.89777 0.62507 4.86815 0.658294 4.85645 0.699061L4.46625 2.04277C4.4283 2.17396 4.34517 2.2875 4.23156 2.3633C4.11803 2.43926 3.9813 2.47263 3.84554 2.45751L2.455 2.3031C2.41294 2.29844 2.37104 2.31314 2.34112 2.34307C2.31119 2.37299 2.29649 2.41489 2.30115 2.45695L2.45556 3.84749C2.47068 3.98325 2.43731 4.11998 2.36135 4.23351C2.28555 4.34712 2.17201 4.43025 2.04082 4.4682L0.69711 4.8584C0.656343 4.8701 0.62312 4.89972 0.606846 4.93889C0.590572 4.97805 0.593019 5.0225 0.613494 5.05964L1.28828 6.28601C1.35428 6.40563 1.3758 6.54475 1.34904 6.67873C1.32229 6.81267 1.24916 6.93288 1.14251 7.01821L0.0521514 7.89032C0.0191828 7.91677 0 7.95676 0 7.99902C0 8.04129 0.0191828 8.08127 0.0521514 8.10773L1.14446 8.98179C1.25111 9.06712 1.32424 9.18733 1.35099 9.32127C1.37776 9.45525 1.35623 9.59437 1.29023 9.71399L0.615445 10.9404C0.59497 10.9775 0.592523 11.0219 0.608797 11.0611C0.625071 11.1003 0.658294 11.1299 0.699061 11.1416L2.04277 11.5318C2.17396 11.5698 2.2875 11.6529 2.3633 11.7665C2.43926 11.88 2.47263 12.0168 2.45751 12.1525L2.3031 13.543C2.29844 13.5851 2.31314 13.627 2.34307 13.6569C2.37299 13.6869 2.41489 13.7016 2.45695 13.6969L3.84749 13.5425C3.98325 13.5274 4.11998 13.5607 4.23351 13.6367C4.34712 13.7125 4.43025 13.826 4.4682 13.9572L4.85841 15.3009C4.8701 15.3417 4.89972 15.3749 4.93889 15.3912C4.97806 15.4075 5.0225 15.405 5.05964 15.3846L6.28601 14.7098C6.40563 14.6438 6.54475 14.6222 6.67873 14.649C6.81267 14.6758 6.93288 14.7489 7.01821 14.8555L7.89228 15.9478C7.91873 15.9808 7.95871 16 8.00098 16C8.04325 16 8.08323 15.9808 8.10968 15.9478L8.98375 14.8555C9.06908 14.7489 9.18929 14.6758 9.32323 14.649C9.4572 14.6222 9.59632 14.6438 9.71595 14.7098L10.9423 15.3846C10.9795 15.405 11.0239 15.4075 11.0631 15.3912C11.1022 15.3749 11.1319 15.3417 11.1436 15.3009L11.5338 13.9572C11.5717 13.826 11.6548 13.7125 11.7684 13.6367C11.882 13.5607 12.0187 13.5274 12.1545 13.5425L13.545 13.6969C13.5871 13.7016 13.629 13.6869 13.6589 13.6569C13.6888 13.627 13.7035 13.5851 13.6989 13.543L13.5408 12.152C13.5257 12.0162 13.5591 11.8795 13.635 11.7659C13.7108 11.6523 13.8244 11.5692 13.9556 11.5312L15.2993 11.141C15.34 11.1293 15.3733 11.0997 15.3895 11.0606C15.4058 11.0214 15.4034 10.9769 15.3829 10.9398L14.7081 9.71343C14.6421 9.59381 14.6206 9.45469 14.6473 9.32072L14.6471 9.32127ZM7.99903 13.8522C4.76643 13.8522 2.1459 11.2316 2.1459 7.99902C2.1459 4.76643 4.76643 2.1459 7.99903 2.1459C11.2316 2.1459 13.8522 4.76643 13.8522 7.99902C13.8486 11.2302 11.2302 13.8486 7.99903 13.8522Z"
              fill="url(#paint1_linear)" />
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
        </button>
      </div>
    );
  }
}

Switch.propTypes = {
  onThemeSwitch: PropTypes.func.isRequired
};