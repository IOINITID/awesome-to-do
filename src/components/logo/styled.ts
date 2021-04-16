import styled from 'styled-components';
import theme from 'styled-theming';

const themeLogoLinkFill = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledLogoLink = styled.a`
  path {
    fill: ${themeLogoLinkFill};
  }
`;
