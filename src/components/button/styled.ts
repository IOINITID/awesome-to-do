import styled from 'styled-components';
import theme from 'styled-theming';

const themeBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const themeBackgroundBefore = theme('mode', {
  light: 'radial-gradient(109.5% 99.54% at 110.19% 66.2%, #e1ebfd 0%, #e9f1ff 49.48%, #f7faff 100%)',
  dark: 'linear-gradient(154.25deg, #4d3c50 21.96%, #1a1523 100.49%)',
});

const themeBoxShadow = theme('mode', {
  light:
    'inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset -5px -5px 15px rgba(255, 255, 255, 0.75), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

const themeBoxShadowBefore = theme('mode', {
  light: '-3px -3px 4px rgba(255, 255, 255, 0.3), 5px 5px 16px rgba(177, 188, 214, 0.7)',
  dark: '3px 3px 16px #000000',
});

const themeBorderBefore = theme('mode', {
  light: '1px solid rgba(251, 252, 255, 0.45)',
  dark: 'none',
});

const themeFill = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeStroke = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledButton = styled.button<{ active: boolean; modal: boolean; outline: string }>`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.modal ? 60 : 46)}px;
  min-width: ${(props) => (props.modal ? 60 : 46)}px;
  height: ${(props) => (props.modal ? 60 : 46)}px;
  margin: 0;
  margin-left: ${(props) => (props.modal ? 'auto' : 0)};
  padding: 0;
  background: ${themeBackground};
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: ${themeBoxShadow};
  cursor: pointer;

  &::before {
    content: '';
    width: ${(props) => (props.modal ? 52 : 40)}px;
    min-width: ${(props) => (props.modal ? 52 : 40)}px;
    height: ${(props) => (props.modal ? 52 : 40)}px;
    background: ${themeBackgroundBefore};
    border: ${themeBorderBefore};
    border-radius: 8px;
    box-shadow: ${themeBoxShadowBefore};
    visibility: ${(props) => props.active && 'hidden'};
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);

    path {
      fill: ${(props) => (props.outline ? 'none' : themeFill)};
      stroke: ${(props) => (props.outline ? themeStroke : '')};
    }
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover,
  &:focus {
    &::before {
      opacity: 0.5;
    }

    svg {
      opacity: 0.7;
    }
  }

  &:active {
    &::before {
      visibility: hidden;
    }

    svg {
      opacity: 1;
    }
  }
`;
