import styled from 'styled-components';
import theme from 'styled-theming';

const themeTasksTitleColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledTasksTitle = styled.h2`
  margin: 0;
  margin-top: 30px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeTasksTitleColor};
`;

const themeTasksListBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const themeTasksListBoxShadow = theme('mode', {
  light: 'inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

const themeTasksListThumbBackground = theme('mode', {
  light: 'radial-gradient(109.5% 99.54% at 110.19% 66.2%, #e1ebfd 0%, #e9f1ff 49.48%, #f7faff 100%)',
  dark: 'linear-gradient(154.25deg, #4d3c50 21.96%, #1a1523 100.49%)',
});

const themeTasksListThumbBorder = theme('mode', {
  light: '2px solid rgba(177, 188, 214, 0.7)',
  dark: '2px solid #1a1523',
});

export const StyledTasksList = styled.ul`
  height: 560px;
  margin: 0;
  margin-left: -10px;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;

  &::-webkit-scrollbar {
    width: 9px;
    background: ${themeTasksListBackground};
    border-radius: 10px;
    box-shadow: ${themeTasksListBoxShadow};
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background: ${themeTasksListThumbBackground};
    border: ${themeTasksListThumbBorder};
    border-radius: 8px;
  }
`;

const themeTasksItemBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const themeTasksItemBoxShadow = theme('mode', {
  light:
    '-4px -3px 16px rgba(255, 255, 255, 0.7), -1px 3px 65px rgba(182, 194, 215, 0), inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

export const StyledTasksItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1130px;
  min-height: 60px;
  margin-bottom: 20px;
  padding: 0 30px;
  background: ${themeTasksItemBackground};
  border-radius: 10px;
  box-shadow: ${themeTasksItemBoxShadow};

  &:last-child {
    margin-bottom: 0;
  }
`;

// .tasks__item--fixed::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 8px;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
// }

// .theme--dark .tasks__item--fixed::before {
//   background: #f9e4b0;
// }

// .theme--light .tasks__item--fixed::before {
//   background: #6d90ff;
// }

// .theme--dark .tasks__item--done {
//   background: linear-gradient(178deg, #4d3c50 21.96%, #1a1523 100.49%);
//   border-radius: 8px;
//   box-shadow: 0 1px 10px #000000;
// }

// .theme--light .tasks__item--done {
//   background: linear-gradient(178deg, #f6faff 21.96%, rgba(177, 189, 216, 0.58) 116.73%);
//   border: 1px solid rgba(251, 252, 255, 0.45);
//   border-radius: 8px;
//   box-shadow: 0 -1px 10px rgba(190, 201, 223, 0.5), 0 1px 30px rgba(189, 198, 219, 0),
//     -3px -3px 4px rgba(255, 255, 255, 0), 5px 5px 16px rgba(177, 188, 214, 0);
// }

const themeTasksDescriptionColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledTasksDescription = styled.p`
  margin: 0;
  margin-right: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeTasksDescriptionColor};
`;

export const StyledTasksDone = styled.div`
  margin-right: 30px;
`;

// .theme--dark .tasks__item .tasks__done path {
//   fill: none;
//   stroke: #ffffff;
// }

// .theme--light .tasks__item .tasks__done path {
//   fill: none;
//   stroke: #5e647c;
// }

// .theme--dark .tasks__item .tasks__more path {
//   fill: #ffffff;
//   stroke: #ffffff;
// }

// .theme--light .tasks__item .tasks__more path {
//   fill: #5e647c;
//   stroke: #5e647c;
// }
