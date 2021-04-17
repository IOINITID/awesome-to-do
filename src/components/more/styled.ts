import styled, { css } from 'styled-components';
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

export const StyledMore = styled.div<{ active?: boolean; done?: boolean }>`
  position: absolute;
  top: 0;
  right: -140px;
  display: ${(props) => (props.active ? 'block' : 'none')};
  width: 135px;
  height: ${(props) => (props.done ? 53 : 75)}px;
  background: ${themeMoreBackground};
  border-radius: 10px;
  box-shadow: ${themeMoreBoxShadow};
`;

export const StyledMoreList = styled.ul`
  display: grid;
  row-gap: 5px;
  margin: 0;
  padding: 7px 10px;
  list-style: none;
`;

const themeMoreItemEditPathFill = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeMoreItemFixedPathFill = theme('mode', {
  light: '#6d90ff',
  dark: '#f9e4b0',
});

const themeMoreItemDeletePathFill = theme('mode', {
  light: '#e06767',
  dark: '#e06767',
});

const themeMoreItemUndonePathFill = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledMoreItem = styled.li<{ edit?: boolean; fixed?: boolean; delete?: boolean; undone?: boolean }>`
  ${(props) =>
    props.edit &&
    css`
      path {
        fill: ${themeMoreItemEditPathFill};
      }

      a {
        color: ${themeMoreItemEditPathFill};
        opacity: 1;

        &:hover,
        &:focus {
          opacity: 0.7;
        }

        &:active {
          opacity: 1;
        }
      }
    `}

  ${(props) =>
    props.fixed &&
    css`
      path {
        fill: ${themeMoreItemFixedPathFill};
      }

      a {
        color: ${themeMoreItemFixedPathFill};
        opacity: 1;

        &:hover,
        &:focus {
          opacity: 0.7;
        }

        &:active {
          opacity: 1;
        }
      }
    `}

    ${(props) =>
    props.delete &&
    css`
      path {
        fill: ${themeMoreItemDeletePathFill};
      }

      a {
        color: ${themeMoreItemDeletePathFill};
        opacity: 1;

        &:hover,
        &:focus {
          opacity: 0.7;
        }

        &:active {
          opacity: 1;
        }
      }
    `}

    ${(props) =>
    props.undone &&
    css`
      path {
        fill: ${themeMoreItemUndonePathFill};
      }

      a {
        color: ${themeMoreItemUndonePathFill};
        opacity: 1;

        &:hover,
        &:focus {
          opacity: 0.7;
        }

        &:active {
          opacity: 1;
        }
      }
    `}
`;

const themeMoreLinkColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledMoreLink = styled.a`
  display: grid;
  align-items: center;
  grid-template-columns: 10px auto;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeMoreLinkColor};
  text-decoration: none;
  column-gap: 10px;

  svg {
    justify-self: center;
  }
`;
