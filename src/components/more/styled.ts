import styled from 'styled-components';
import theme from 'styled-theming';

const themeMoreBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const themeMoreBoxShadow = theme('mode', {
  light:
    '-4px -3px 16px rgba(255, 255, 255, 0.7), -1px 3px 65px rgba(182, 194, 215, 0.49), inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

export const StyledMore = styled.div<{ active?: boolean }>`
  position: absolute;
  top: 0;
  right: -140px;
  display: ${(props) => (props.active ? 'block' : 'none')};
  width: 135px;
  height: 75px;
  background: ${themeMoreBackground};
  border-radius: 10px;
  box-shadow: ${themeMoreBoxShadow};
`;

export const StyledMoreList = styled.ul`
  margin: 0;
  padding: 7px 13px 7px 10px;
  list-style: none;
`;

export const StyledMoreItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledMoreIcon = styled.div`
  position: absolute;
  left: 10px;
`;

const themeMoreLinkColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledMoreLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeMoreLinkColor};
  text-decoration: none;
`;

// .theme--dark .more__item--edit .more__icon path {
//   fill: #ffffff;
// }

// .theme--light .more__item--edit .more__icon path {
//   fill: #5e647c;
// }

// .theme--dark .more__item--fixed .more__icon path {
//   fill: #ffffff;
// }

// .theme--light .more__item--fixed .more__icon path {
//   fill: #5e647c;
// }

// .theme--dark .more__item--delete .more__icon path {
//   fill: #ffffff;
// }

// .theme--light .more__item--delete .more__icon path {
//   fill: #5e647c;
// }

// .theme--dark .more__item--undone .more__icon path {
//   fill: #ffffff;
// }

// .theme--light .more__item--undone .more__icon path {
//   fill: #5e647c;
// }

// .theme--dark .more__item--edit .more__link:hover,
// .theme--dark .more__item--edit .more__link:focus {
//   color: #f9e4b0;
//   opacity: 0.7;
// }

// .theme--dark .more__item--edit .more__link:hover .more__icon path,
// .theme--dark .more__item--edit .more__link:focus .more__icon path {
//   fill: #f9e4b0;
// }

// .theme--dark .more__item--edit .more__link:active {
//   color: #f9e4b0;
//   opacity: 1;
// }

// .theme--light .more__item--edit .more__link:hover,
// .theme--light .more__item--edit .more__link:focus {
//   color: #6d90ff;
//   opacity: 0.7;
// }

// .theme--light .more__item--edit .more__link:hover .more__icon path,
// .theme--light .more__item--edit .more__link:focus .more__icon path {
//   fill: #6d90ff;
// }

// .theme--light .more__item--edit .more__link:active {
//   color: #6d90ff;
//   opacity: 1;
// }

// .theme--dark .more__item--fixed .more__link:hover,
// .theme--dark .more__item--fixed .more__link:focus {
//   color: #f9e4b0;
//   opacity: 0.7;
// }

// .theme--dark .more__item--fixed .more__link:hover .more__icon path,
// .theme--dark .more__item--fixed .more__link:focus .more__icon path {
//   fill: #f9e4b0;
// }

// .theme--dark .more__item--fixed .more__link:active {
//   color: #f9e4b0;
//   opacity: 1;
// }

// .theme--light .more__item--fixed .more__link:hover,
// .theme--light .more__item--fixed .more__link:focus {
//   color: #6d90ff;
//   opacity: 0.7;
// }

// .theme--light .more__item--fixed .more__link:hover .more__icon path,
// .theme--light .more__item--fixed .more__link:focus .more__icon path {
//   fill: #6d90ff;
// }

// .theme--light .more__item--fixed .more__link:active {
//   color: #6d90ff;
//   opacity: 1;
// }

// .theme--dark .more__item--delete .more__link:hover,
// .theme--dark .more__item--delete .more__link:focus {
//   color: #e06767;
//   opacity: 0.7;
// }

// .theme--dark .more__item--delete .more__link:hover .more__icon path,
// .theme--dark .more__item--delete .more__link:focus .more__icon path {
//   fill: #e06767;
// }

// .theme--dark .more__item--delete .more__link:active {
//   color: #e06767;
//   opacity: 1;
// }

// .theme--light .more__item--delete .more__link:hover,
// .theme--light .more__item--delete .more__link:focus {
//   color: #e06767;
//   opacity: 0.7;
// }

// .theme--light .more__item--delete .more__link:hover .more__icon path,
// .theme--light .more__item--delete .more__link:focus .more__icon path {
//   fill: #e06767;
// }

// .theme--light .more__item--delete .more__link:active {
//   color: #e06767;
//   opacity: 1;
// }

// .tasks__item--done .more {
//   height: 53px;
// }

// .theme--dark .more__item--undone .more__link:hover,
// .theme--dark .more__item--undone .more__link:focus {
//   color: #f9e4b0;
//   opacity: 0.7;
// }

// .theme--dark .more__item--undone .more__link:active {
//   color: #f9e4b0;
//   opacity: 1;
// }

// .theme--dark .more__item--undone .more__link:hover .more__icon path,
// .theme--dark .more__item--undone .more__link:focus .more__icon path {
//   fill: #f9e4b0;
// }

// .theme--light .more__item--undone .more__link:hover,
// .theme--light .more__item--undone .more__link:focus {
//   color: #6d90ff;
//   opacity: 0.7;
// }

// .theme--light .more__item--undone .more__link:active {
//   color: #6d90ff;
//   opacity: 1;
// }

// .theme--light .more__item--undone .more__link:hover .more__icon path,
// .theme--light .more__item--undone .more__link:focus .more__icon path {
//   fill: #6d90ff;
// }
