import styled from 'styled-components';
import theme from 'styled-theming';

const switchBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const switchBoxShadow = theme('mode', {
  light:
    '-4px -3px 16px rgba(255, 255, 255, 0.7), -1px 3px 65px rgba(182, 194, 215, 0.49), inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

const switchSpanColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledSwitch = styled.div<{ active: boolean }>`
  position: relative;
  width: 107px;
  height: 52px;
  margin-left: auto;
  padding: 3px 5px;
  background: ${switchBackground};
  border-radius: 10px;
  box-shadow: ${switchBoxShadow};
  cursor: pointer;

  button {
    z-index: 1;
    transform: ${(props) => (props.active ? 'translateX(51px)' : 'translateX(0)')};
    transition: 0.75s ease-in-out;
  }

  span {
    color: ${switchSpanColor};
  }
`;
