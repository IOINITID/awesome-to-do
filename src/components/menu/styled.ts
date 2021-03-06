import styled from 'styled-components';
import theme from 'styled-theming';

const themeMenuBackground = theme('mode', {
  light: 'linear-gradient(82.07deg, #f6faff 8.11%, #dfe9fd 85.96%)',
  dark: 'linear-gradient(140.98deg, #3a3d4e 19.26%, #1f1523 66.6%)',
});

const themeMenuBoxShadow = theme('mode', {
  light: 'none',
  dark: '4px -4px 50px rgba(83, 86, 102, 0.1)',
});

const themeMEnuLinkColor = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

const themeMenuItemIconFixedFill = theme('mode', {
  light: '#6d90ff',
  dark: '#f9e4b0',
});

const themeMenuItemIconAddFill = theme('mode', {
  light: '#77c68d',
  dark: '#85dc9d',
});

export const StyledMenu = styled.section<{ active?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 376px;
  height: 100%;
  background: ${themeMenuBackground};
  box-shadow: ${themeMenuBoxShadow};
  transform: ${(props) => (props.active ? 'translateX(0)' : 'translateX(-376px)')};
  transition: 0.75s ease-in-out;
`;

export const StyledMenuContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr max-content;
  width: 100%;
  height: 100%;
  padding: 50px 70px;
`;

export const StyledMenuList = styled.ul`
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledMenuItem = styled.li<{ fixed?: boolean; add?: boolean }>`
  display: grid;

  path {
    fill: ${(props) => (props.fixed ? themeMenuItemIconFixedFill : themeMenuItemIconAddFill)};
  }
`;

export const StyledMenuLink = styled.a`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  color: ${themeMEnuLinkColor};
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: 0.75;
  }
`;

export const StyledMenuLinkContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 17px auto;
  column-gap: 22px;
`;

export const StyledMenuQuantity = styled.sup`
  position: relative;
  top: 0;
  left: 2px;
  font-weight: 400;
  font-size: 10px;
  line-height: 21px;
  font-family: 'SF Pro Display', 'Arial', sans-serif;
  vertical-align: super;
`;
