import styled from 'styled-components';
import theme from 'styled-theming';

const themeLinkFill = theme('mode', {
  light: '#5e647c',
  dark: '#ffffff',
});

export const StyledLink = styled.a`
  path {
    fill: ${themeLinkFill};
  }
`;
