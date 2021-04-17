import styled from 'styled-components';
import theme from 'styled-theming';
import { StyledSwitch } from '../switch/styled';
import { StyledNavigation } from '../navigation/styled';
import { StyledSearchForm } from '../search/styled';
import { StyledLogoLink } from '../logo/styled';

const themeHeaderBackground = theme('mode', {
  light: 'linear-gradient(124.48deg, #f6faff 28.86%, #dfe9fd 110.11%)',
  dark: 'linear-gradient(117.98deg, #3a3d4e 46.98%, #1f1523 95.78%)',
});

const themeHeaderBoxShadow = theme('mode', {
  light: '0 4px 16px #dde5f1',
  dark: '660px 4px 250px rgba(32, 23, 36, 0.7), 5px 10px 50px #2e303e',
});

export const StyledHeader = styled.header`
  z-index: 4;
  width: 100%;
  min-height: 80px;
  background: ${themeHeaderBackground};
  box-shadow: ${themeHeaderBoxShadow};
`;

export const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: auto 25px auto 1fr auto 90px auto;
  max-width: 1380px;
  min-height: 80px;
  margin: 0 auto;
  padding: 0 40px;

  ${StyledLogoLink} {
    grid-column: 7/8;
  }

  ${StyledSwitch} {
    grid-column: 5/6;
  }

  ${StyledNavigation} {
    grid-column: 1/2;
  }

  ${StyledSearchForm} {
    grid-column: 3/4;
  }
`;
