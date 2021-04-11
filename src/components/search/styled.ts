import styled from 'styled-components';
import theme from 'styled-theming';

const themeSearchInputColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeSearchLabelBackground = theme('mode', {
  light: 'linear-gradient(90.15deg, #ebf3fc 1.15%, #e2ecfd 100.11%)',
  dark: 'linear-gradient(140.4deg, #271827 3%, #2c2535 115.66%)',
});

const themeSearchLabelBoxShadow = theme('mode', {
  light:
    '-4px -3px 16px rgba(255, 255, 255, 0.7), -1px 3px 65px rgba(182, 194, 215, 0.49), inset 10px 10px 10px rgba(224, 235, 248, 0.2), inset 5px 5px 10px rgba(167, 172, 190, 0.7)',
  dark: '-4px -4px 16px rgba(88, 76, 98, 0.25), 3px 3px 12px rgba(0, 0, 0, 0.2), inset 4px 4px 8px rgba(0, 0, 0, 0.35)',
});

export const StyledSearchLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
  background: none;
  border-radius: 10px;
  box-shadow: none;
  transition: 0.75s ease-in-out;
`;

export const StyledSearchInput = styled.input`
  display: none;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  color: ${themeSearchInputColor};
  background: none;
  border: none;
  outline: none;
  transition: 0.75s ease-in-out;

  &::placeholder {
    color: ${themeSearchInputColor};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

export const StyledSearchForm = styled.form<{ active: boolean }>`
  position: relative;
  width: ${(props) => (props.active ? 383 : 52)}px;
  height: 52px;
  transition: 0.75s ease-in-out;

  ${StyledSearchLabel} {
    justify-content: ${(props) => (props.active ? 'flex-start' : '')};
    background: ${(props) => (props.active ? themeSearchLabelBackground : 'none')};
    box-shadow: ${(props) => (props.active ? themeSearchLabelBoxShadow : 'none')};
  }

  ${StyledSearchInput} {
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: ${(props) => (props.active ? '100%' : 0)};
    height: ${(props) => (props.active ? '100%' : 0)};
    margin: ${(props) => (props.active ? '0 20px' : 0)};
  }
`;
